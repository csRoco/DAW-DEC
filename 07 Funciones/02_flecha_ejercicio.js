/*
 * ============================================================
 *  UT4 · Funciones flecha — EJERCICIO PARA EL ALUMNO
 *  RA4 → CE b) Se han creado y utilizado funciones definidas por el usuario
 *        CE d) Se han creado y utilizado arrays
 *        CE i) Se ha depurado y documentado el código
 *
 *  Instrucciones:
 *   - Completa cada TODO usando SOLO funciones flecha.
 *   - Usa retorno implícito siempre que el cuerpo sea una sola expresión.
 *   - Ejecuta con: node 02_flecha_ejercicio.js
 *   - Cada apartado muestra "OK" o "FALLO" para que compruebes tu solución.
 * ============================================================
 */

// Utilidad de comprobación (no hace falta modificarla)
const comprobar = (apartado, obtenido, esperado) => {
  const ok = JSON.stringify(obtenido) === JSON.stringify(esperado);
  console.log(`${ok ? 'OK   ' : 'FALLO'} ${apartado}`, ok ? '' : `→ obtenido: ${JSON.stringify(obtenido)} | esperado: ${JSON.stringify(esperado)}`);
};

// Datos de partida: notas de un grupo de 2º DAW
const alumnos = [
  { nombre: 'Ana',    nota: 7.5 },
  { nombre: 'Bruno',  nota: 4.2 },
  { nombre: 'Carla',  nota: 9.1 },
  { nombre: 'David',  nota: 5.0 },
  { nombre: 'Elena',  nota: 3.8 },
];


// ------------------------------------------------------------
// NIVEL 1 · CONSOLIDACIÓN: convertir a función flecha
// ------------------------------------------------------------

// 1.1 Reescribe esta función como flecha con retorno implícito.
function estaAprobado(nota) {
  return nota >= 5;
}
// TODO: const estaAprobadoFlecha = ...
const estaAprobadoFlecha = undefined;

// 1.2 Reescribe como flecha. Pista: hay parámetro por defecto.
function redondear(numero, decimales = 1) {
  return Math.round(numero * 10 ** decimales) / 10 ** decimales;
}
// TODO: const redondearFlecha = ...
const redondearFlecha = undefined;

// 1.3 Esta flecha devuelve undefined. Encuentra el error y corrígelo.
const ficha = (nombre, nota) => { nombre, nota };


// ------------------------------------------------------------
// NIVEL 2 · APLICACIÓN: flechas como callbacks
// ------------------------------------------------------------

// 2.1 Crea "nombresAprobados": recibe un array de alumnos y devuelve
//     un array con los NOMBRES de los aprobados. Reutiliza estaAprobadoFlecha.
//     Pista: filter + map.
// TODO
const nombresAprobados = undefined;

// 2.2 Crea "notaMedia": recibe un array de alumnos y devuelve la media
//     redondeada a 1 decimal (reutiliza redondearFlecha).
//     Si el array está vacío, devuelve 0.
//     Pista: for...of dentro de una flecha con llaves.
// TODO
const notaMedia = undefined;

// 2.3 Crea "subirNotas": recibe un array de alumnos y una cantidad,
//     y devuelve un NUEVO array con la nota de cada alumno subida en esa
//     cantidad, sin pasar de 10. El array original NO debe modificarse.
//     Pista: map + Math.min + spread de objetos { ...a, nota: ... }
// TODO
const subirNotas = undefined;


// ------------------------------------------------------------
// NIVEL 3 · RETO
// ------------------------------------------------------------

// 3.1 Crea "crearFiltro": recibe una nota mínima y DEVUELVE UNA FUNCIÓN
//     flecha que, dada una lista de alumnos, devuelve los que tienen
//     una nota mayor o igual a esa mínima.
//     Ejemplo de uso:
//        const notables = crearFiltro(7);
//        notables(alumnos)  →  [{Ana...}, {Carla...}]
// TODO
const crearFiltro = undefined;

// 3.2 (Explica con un comentario, sin código)
//     ¿Por qué el siguiente método no funciona? ¿Cómo lo arreglarías?
const grupo = {
  nombre: '2º DAW',
  describir: () => `Grupo ${this.nombre}`,
};
// TU RESPUESTA:
//


// ============================================================
// COMPROBACIONES (no modificar)
// ============================================================
// Cada comprobación va protegida: si un apartado falla, los demás se siguen evaluando
const probar = (apartado, prueba) => {
  try { prueba(); }
  catch (error) { console.log(`PENDIENTE ${apartado} → ${error.message}`); }
};

probar('1.1', () => comprobar('1.1', [estaAprobadoFlecha(4.9), estaAprobadoFlecha(5)], [false, true]));
probar('1.2', () => comprobar('1.2', [redondearFlecha(6.666), redondearFlecha(6.666, 2)], [6.7, 6.67]));
probar('1.3', () => comprobar('1.3', ficha('Ana', 7.5), { nombre: 'Ana', nota: 7.5 }));
probar('2.1', () => comprobar('2.1', nombresAprobados(alumnos), ['Ana', 'Carla', 'David']));
probar('2.2', () => comprobar('2.2', [notaMedia(alumnos), notaMedia([])], [5.9, 0]));
probar('2.3', () => {
  comprobar('2.3', subirNotas(alumnos, 1.5).map(a => a.nota), [9, 5.7, 10, 6.5, 5.3]);
  comprobar('2.3 (original intacto)', alumnos[2].nota, 9.1);
});
probar('3.1', () => comprobar('3.1', crearFiltro(7)(alumnos).map(a => a.nombre), ['Ana', 'Carla']));
