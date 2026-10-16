/*
 * ============================================================
 *  UT4 · Funciones flecha (arrow functions) — EJEMPLOS
 *  RA4 → CE b) Se han creado y utilizado funciones definidas por el usuario
 *        CE i) Se ha depurado y documentado el código
 *
 *  Ejecutar:  node 01_flecha_ejemplos.js
 *  o pegar en la consola de las DevTools del navegador.
 * ============================================================
 */

// ============================================================
// EJEMPLO 1. De función clásica a función flecha, paso a paso
// ============================================================
console.log('--- Ejemplo 1: conversión paso a paso ---');

// Paso 0: declaración de función clásica
function cuadrado1(n) {
  return n * n;
}

// Paso 1: expresión de función guardada en una constante
const cuadrado2 = function (n) {
  return n * n;
};

// Paso 2: quitamos "function" y añadimos "=>" tras los parámetros
const cuadrado3 = (n) => {
  return n * n;
};

// Paso 3: si el cuerpo es UNA sola expresión, quitamos llaves y return
//         → RETORNO IMPLÍCITO
const cuadrado4 = (n) => n * n;

// Paso 4: con UN solo parámetro, los paréntesis son opcionales
const cuadrado5 = n => n * n;

console.log(cuadrado1(4), cuadrado2(4), cuadrado3(4), cuadrado4(4), cuadrado5(4));
// 16 16 16 16 16  → las cinco versiones hacen lo mismo

// ---- Reglas de los parámetros ----
const saludar = () => 'Hola';                 // 0 parámetros → () obligatorios
const doble = x => x * 2;                     // 1 parámetro  → () opcionales
const sumar = (a, b) => a + b;                // 2 o más      → () obligatorios
const potencia = (base, exp = 2) => base ** exp; // valores por defecto → ()

console.log(saludar(), doble(5), sumar(3, 4), potencia(3), potencia(2, 10));
// Hola 10 7 9 1024

// ---- Cuerpo con varias sentencias → llaves y return OBLIGATORIOS ----
const calificar = nota => {
  if (nota < 5) return 'Suspenso';
  if (nota < 7) return 'Aprobado';
  if (nota < 9) return 'Notable';
  return 'Sobresaliente';
};
console.log(calificar(4.5), calificar(8)); // Suspenso Notable

// ---- ERROR FRECUENTE 1: llaves sin return ----
const restaMal = (a, b) => { a - b };   // las llaves abren un BLOQUE, no devuelven nada
console.log(restaMal(10, 3));           // undefined  ← ¡cuidado!

// ---- ERROR FRECUENTE 2: devolver un objeto literal ----
// const crearAlumnoMal = (nombre, nota) => { nombre: nombre, nota: nota };
// ↑ Ni siquiera llega a ejecutarse bien: JS interpreta { } como bloque.
//   Descomenta la línea anterior y verás un SyntaxError.

const crearAlumno = (nombre, nota) => ({ nombre, nota }); // paréntesis alrededor
console.log(crearAlumno('Lucía', 8));   // { nombre: 'Lucía', nota: 8 }


// ============================================================
// EJEMPLO 2. Funciones flecha como callbacks
//   Una función flecha es un VALOR: se puede pasar como argumento
//   a otra función. Aquí es donde más se usan en la práctica.
// ============================================================
console.log('\n--- Ejemplo 2: flechas como callbacks ---');

// Función propia que recibe otra función (callback)
const aplicarATodos = (lista, operacion) => {
  const resultado = [];
  for (const elemento of lista) {
    resultado.push(operacion(elemento)); // llamamos a la función recibida
  }
  return resultado;
};

const precios = [10, 25, 40];

// Pasamos la operación "en línea" como función flecha
console.log(aplicarATodos(precios, p => p * 1.21));      // con IVA
console.log(aplicarATodos(precios, p => `${p} €`));      // formateados

// Lo mismo con los métodos de los arrays (RA4 CE d: se han creado y utilizado arrays)
console.log(precios.map(p => p * 2));                    // [20, 50, 80]
console.log(precios.filter(p => p > 20));                // [25, 40]

// API del navegador/entorno (no del lenguaje): setTimeout
setTimeout(() => console.log('\n(1 s después) setTimeout también acepta flechas'), 1000);


// ============================================================
// EJEMPLO 3. Cuándo NO usar una flecha: métodos que usan "this"
//   La flecha NO tiene su propio "this": usa el del contexto
//   donde se escribió. Por eso no sirve como método de objeto.
// ============================================================
console.log('\n--- Ejemplo 3: flechas y this ---');

const alumno = {
  nombre: 'Marcos',
  presentarseBien() {               // método abreviado (función normal)
    return `Soy ${this.nombre}`;    // this → alumno
  },
  presentarseMal: () => {
    return `Soy ${this?.nombre}`;   // this → NO es alumno
  },
};

console.log(alumno.presentarseBien()); // Soy Marcos
console.log(alumno.presentarseMal());  // Soy undefined

/*
 * RESUMEN
 *  - Sintaxis:  (parámetros) => expresión      → retorno implícito
 *               (parámetros) => { ...; return } → retorno explícito
 *  - Objeto literal como retorno: envolver entre paréntesis ({ ... })
 *  - Ideales para callbacks cortos (map, filter, setTimeout, eventos)
 *  - NO usar como métodos de objeto que necesiten this
 */
