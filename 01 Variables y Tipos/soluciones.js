/*
  SOLUCIONES · Batería de 15 ejercicios (JavaScript en entorno cliente)
  2º DAW · IES Leonardo da Vinci

  Material de referencia para el profesor. Ejecutar con:
      node soluciones.js
*/

// ============================================================
// EJERCICIO 1 · Declaración de variables: let vs const
// ============================================================
console.log("--- Ejercicio 1 ---");

let edad = 20;
edad = 21;
console.log(edad); // → 21

const PI = 3.1416;
console.log(PI); // → 3.1416
// PI = 3;  // ❌ TypeError: Assignment to constant variable.

// ============================================================
// EJERCICIO 2 · var vs let: ámbito y hoisting
// ============================================================
console.log("\n--- Ejercicio 2 ---");

if (true) {
  var mensaje = "Hola desde var";
}
console.log(mensaje); // → "Hola desde var" (var tiene ámbito de función, no de bloque)

if (true) {
  let mensaje2 = "Hola desde let";
  console.log(mensaje2); // → "Hola desde let" (accesible aquí dentro)
}
try {
  console.log(mensaje2); // ❌ ReferenceError: mensaje2 is not defined
} catch (e) {
  console.log(
    "Error esperado: mensaje2 no existe fuera del bloque (ámbito de bloque)",
  );
}

// ============================================================
// EJERCICIO 3 · Tipos primitivos y typeof
// ============================================================
console.log("\n--- Ejercicio 3 ---");

let ejemploString = "hola";
console.log(typeof ejemploString); // → "string"

let ejemploNumber = 42;
console.log(typeof ejemploNumber); // → "number"

let ejemploBoolean = true;
console.log(typeof ejemploBoolean); // → "boolean"

let ejemploUndefined;
console.log(typeof ejemploUndefined); // → "undefined"

let ejemploNull = null;
console.log(typeof ejemploNull); // → "object" (caso especial histórico)

let ejemploSymbol = Symbol("id");
console.log(typeof ejemploSymbol); // → "symbol"

let ejemploBigInt = 10n;
console.log(typeof ejemploBigInt); // → "bigint"

// ============================================================
// EJERCICIO 4 · Autoboxing
// ============================================================
console.log("\n--- Ejercicio 4 ---");

console.log("hola".toUpperCase()); // → "HOLA"

// JS crea temporalmente un objeto String envolviendo el valor primitivo
// para poder acceder a sus métodos, y lo descarta inmediatamente después.

// ============================================================
// EJERCICIO 5 · Notación científica
// ============================================================
console.log("\n--- Ejercicio 5 ---");

let distanciaSol = 1.5e8;
console.log(distanciaSol); // → 150000000

let tamanoVirus = 1.2e-7;
console.log(tamanoVirus); // → 1.2e-7 (se muestra igual, muy pequeño)

// ============================================================
// EJERCICIO 6 · Sistemas numéricos: hexadecimal, octal y binario
// ============================================================
console.log("\n--- Ejercicio 6 ---");

let color = 0xff5733;
console.log(color); // → 16734003

let numeroBinario = 0b1101;
console.log(numeroBinario); // → 13

let numeroOctal = 0o17;
console.log(numeroOctal); // → 15

// ============================================================
// EJERCICIO 7 · Números especiales
// ============================================================
console.log("\n--- Ejercicio 7 ---");

console.log(0 / 0); // → NaN

console.log(1 / 0); // → Infinity

console.log(NaN === NaN); // → false (NaN nunca es igual a sí mismo)

// ============================================================
// EJERCICIO 8 · Strings: creación y propiedades
// ============================================================
console.log("\n--- Ejercicio 8 ---");

let nombreStr = "Ana";
let apellidoStr = 'García';
let nombreCompleto = nombreStr + " " + apellidoStr;
console.log(nombreCompleto); // → "Ana García"

console.log(nombreCompleto.length); // → 10

// ============================================================
// EJERCICIO 9 · Plantillas de string (template literals)
// ============================================================
console.log("\n--- Ejercicio 9 ---");

let nombre = "Ana";
let cursoActual = 2;
console.log(`Hola ${nombre}, estás en ${cursoActual}º de DAW`);
// → "Hola Ana, estás en 2º de DAW"

console.log(`El curso que viene estarás en ${cursoActual + 1}º`);
// → "El curso que viene estarás en 3º"

// ============================================================
// EJERCICIO 10 · Secuencias de escape
// ============================================================
console.log("\n--- Ejercicio 10 ---");

console.log("Primera línea\nSegunda línea");
// → Primera línea
//   Segunda línea

console.log("Ella dijo: \"Hola a todos\"");
// → Ella dijo: "Hola a todos"

// ============================================================
// EJERCICIO 11 · Booleanos: truthy y falsy
// ============================================================
console.log("\n--- Ejercicio 11 ---");

let miEdad = 20;
let mayorDeEdad = miEdad >= 18;
console.log(mayorDeEdad); // → true

console.log(Boolean(0)); // → false
console.log(Boolean("")); // → false
console.log(Boolean("hola")); // → true
console.log(Boolean(null)); // → false
console.log(Boolean(undefined)); // → false
console.log(Boolean(42)); // → true

// ============================================================
// EJERCICIO 12 · Operadores aritméticos
// ============================================================
console.log("\n--- Ejercicio 12 ---");

let x = 10;
let y = 3;
console.log(x + y); // → 13
console.log(x - y); // → 7
console.log(x * y); // → 30
console.log(x / y); // → 3.3333333333333335
console.log(x % y); // → 1

console.log(2 ** 10); // → 1024

let contador = 0;
contador++;
contador++;
console.log(contador); // → 2

// ============================================================
// EJERCICIO 13 · Relacionales, coerción y comparación estricta
// ============================================================
console.log("\n--- Ejercicio 13 ---");

console.log(5 == "5"); // → true  (coerción: el string se convierte a number)
console.log(5 === "5"); // → false (tipos distintos, no hay conversión)

console.log(null == undefined); // → true  (caso especial de ==)
console.log(null === undefined); // → false (tipos distintos)

console.log("10" > "9");
// → false, porque al comparar strings se hace carácter a carácter (orden
// alfabético/Unicode): "1" (primer carácter de "10") es "menor" que "9"

// ============================================================
// EJERCICIO 14 · Operadores lógicos y cortocircuito
// ============================================================
console.log("\n--- Ejercicio 14 ---");

let usuario = null;
let nombreMostrado = usuario || "Invitado";
console.log(nombreMostrado); // → "Invitado"

let sesionIniciada = true;
sesionIniciada && console.log("Bienvenido de nuevo"); // → se imprime porque es true

let activo = false;
console.log(!activo); // → true

// ============================================================
// EJERCICIO 15 · Objetos: mutabilidad y comparación por referencia
// ============================================================
console.log("\n--- Ejercicio 15 ---");

const persona1 = { nombre: "Ana", edad: 25 };
persona1.edad = 26; // ✅ permitido: const impide reasignar la variable, no mutar el objeto
console.log(persona1); // → { nombre: 'Ana', edad: 26 }

const persona2 = { nombre: "Ana", edad: 26 };
console.log(persona1 === persona2); // → false (mismo contenido, distinta referencia)

const persona3 = persona1;
console.log(persona1 === persona3); // → true (misma referencia en memoria)
