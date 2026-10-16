/*
 * ============================================================
 *  UT4 · Funciones flecha — SOLUCIÓN (solo profesorado)
 *  RA4 → CE b), CE d), CE i)
 *  Ejecutar: node 03_flecha_solucion.js  → todo debe salir OK
 * ============================================================
 */

const comprobar = (apartado, obtenido, esperado) => {
  const ok = JSON.stringify(obtenido) === JSON.stringify(esperado);
  console.log(
    `${ok ? "OK   " : "FALLO"} ${apartado}`,
    ok
      ? ""
      : `→ obtenido: ${JSON.stringify(obtenido)} | esperado: ${JSON.stringify(esperado)}`,
  );
};

const alumnos = [
  { nombre: "Ana", nota: 7.5 },
  { nombre: "Bruno", nota: 4.2 },
  { nombre: "Carla", nota: 9.1 },
  { nombre: "David", nota: 5.0 },
  { nombre: "Elena", nota: 3.8 },
];

// ---------------- NIVEL 1 ----------------

// 1.1 Un parámetro + una expresión → sin llaves ni return
//     (con un solo parámetro los paréntesis son opcionales)
const estaAprobadoFlecha = (nota) => nota >= 5;

// 1.2 Con valor por defecto los paréntesis son obligatorios
const redondearFlecha = (numero, decimales = 1) =>
  Math.round(numero * 10 ** decimales) / 10 ** decimales;

// 1.3 Las llaves se interpretaban como BLOQUE de código, no como objeto.
//     Para devolver un objeto literal hay que envolverlo en paréntesis.
const ficha = (nombre, nota) => ({ nombre, nota });

// ---------------- NIVEL 2 ----------------

// 2.1 Encadenamos filter (selecciona) y map (transforma).
//     Pasamos la flecha estaAprobadoFlecha dentro de otra flecha.
const nombresAprobados = (lista) =>
  lista.filter((a) => estaAprobadoFlecha(a.nota)).map((a) => a.nombre);

// 2.2 Varias sentencias → llaves + return explícito
const notaMedia = (lista) => {
  if (lista.length === 0) return 0; // evita 0 / 0 = NaN

  let suma = 0;
  for (const a of lista) {
    suma += a.nota;
  }

  return redondearFlecha(suma / lista.length);
};

// 2.3 map crea un array NUEVO; { ...a } crea un objeto NUEVO por alumno.
//     Así no modificamos el array original (inmutabilidad).
//     redondearFlecha evita errores de coma flotante (4.2 + 1.5 = 5.7000000000000002)
const subirNotas = (lista, cantidad) =>
  lista.map((a) => ({
    ...a,
    nota: redondearFlecha(Math.min(a.nota + cantidad, 10)),
  }));

// ERROR FRECUENTE en 2.3: modificar el objeto original
//   lista.map(a => { a.nota += cantidad; return a; })
//   → devuelve un array nuevo, pero los OBJETOS son los mismos:
//     alumnos[2].nota quedaría cambiado.

// ---------------- NIVEL 3 ----------------

// 3.1 Una flecha que devuelve otra flecha (función de orden superior).
//     La función interna "recuerda" notaMinima aunque crearFiltro ya
//     haya terminado (clausura / closure).
const crearFiltro = (notaMinima) => (lista) =>
  lista.filter((a) => a.nota >= notaMinima);
// Versión desarrollada equivalente:
//   const crearFiltro = (notaMinima) => {
//     return (lista) => {
//       return lista.filter((a) => a.nota >= notaMinima);
//     };
//   };

// 3.2 Respuesta esperada:
//   Las funciones flecha NO tienen su propio this: toman el this del
//   contexto donde se definen (aquí, el módulo/ámbito global), no el
//   objeto "grupo". Por eso this.nombre es undefined.
//   Solución: usar un método normal.
const grupo = {
  nombre: "2º DAW",
  describir() {
    return `Grupo ${this.nombre}`;
  },
};

// ============================================================
// COMPROBACIONES
// ============================================================
comprobar(
  "1.1",
  [estaAprobadoFlecha(4.9), estaAprobadoFlecha(5)],
  [false, true],
);
comprobar(
  "1.2",
  [redondearFlecha(6.666), redondearFlecha(6.666, 2)],
  [6.7, 6.67],
);
comprobar("1.3", ficha("Ana", 7.5), { nombre: "Ana", nota: 7.5 });
comprobar("2.1", nombresAprobados(alumnos), ["Ana", "Carla", "David"]);
comprobar("2.2", [notaMedia(alumnos), notaMedia([])], [5.9, 0]);
const subidas = subirNotas(alumnos, 1.5);
comprobar(
  "2.3",
  subidas.map((a) => a.nota),
  [9, 5.7, 10, 6.5, 5.3],
);
comprobar("2.3 (original intacto)", alumnos[2].nota, 9.1);
comprobar(
  "3.1",
  crearFiltro(7)(alumnos).map((a) => a.nombre),
  ["Ana", "Carla"],
);
comprobar("3.2", grupo.describir(), "Grupo 2º DAW");
