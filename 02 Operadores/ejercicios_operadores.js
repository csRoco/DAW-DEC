/*
  BATERÍA DE EJERCICIOS — OPERADORES EN JAVASCRIPT
  UT2. Manejo de la sintaxis del lenguaje — RA02
  (Sin uso de funciones)

  Cómo usar este archivo:
    1. Lee el código de cada ejercicio y PREDICE qué va a mostrar antes
       de ejecutarlo. Escribe tu predicción en "TU RESPUESTA".
    2. Ejecuta:   node ejercicios_operadores.js
    3. Compara la salida con tu predicción y completa las explicaciones.
*/

// =================================================
// NIVEL 1 — CONSOLIDACIÓN
// (operadores aritméticos, asignación, precedencia)
// =================================================

// ============================================================
// EJERCICIO 1 · Precedencia aritmética
// ============================================================
console.log("--- Ejercicio 1 ---");
{
  let resultado = 2 + 3 * 4 - (6 / 2);
  console.log(resultado);

  // ¿Qué valor se muestra? Justifica el orden de evaluación de los
  // operadores.
  // TU RESPUESTA:
  //
}

// ============================================================
// EJERCICIO 2 · Incremento/decremento
// ============================================================
console.log("\n--- Ejercicio 2 ---");
{
  let x = 5;
  console.log(x++);
  console.log(x);
  console.log(++x);

  // Explica la diferencia entre x++ y ++x, indicando qué imprime cada
  // línea.
  // TU RESPUESTA:
  //
}

// ============================================================
// EJERCICIO 3 · Asignación compuesta
// ============================================================
console.log("\n--- Ejercicio 3 ---");
{
  let saldo = 100;
  saldo += 50;
  saldo -= 30;
  saldo *= 2;
  console.log(saldo);

  // Calcula el valor final sin ejecutar el código, después verifica el
  // resultado.
  // TU RESPUESTA:
  //
}

// ============================================================
// EJERCICIO 4 · Operador módulo (resto)
// ============================================================
console.log("\n--- Ejercicio 4 ---");
{
  let n = 7;
  let esPar = n % 2 === 0;
  console.log(esPar);

  let m = -4;
  let esParM = m % 2 === 0;
  console.log(esParM);

  // ¿Qué se muestra en cada console.log? ¿Por qué es útil el operador %
  // en programación? Propón un caso de uso distinto al de comprobar
  // paridad.
  // TU RESPUESTA:
  //
}

// =================================================
// NIVEL 2 — APLICACIÓN
// (comparación, lógicos, truthy/falsy)
// =================================================

// ============================================================
// EJERCICIO 5 · Igualdad débil vs estricta
// ============================================================
console.log("\n--- Ejercicio 5 ---");
{
  console.log(5 == "5");
  console.log(5 === "5");
  console.log(null == undefined);
  console.log(null === undefined);

  // Predice cada resultado y explica por qué == produce coerción de tipo
  // mientras que === no lo hace.
  // TU RESPUESTA:
  //
}

// ============================================================
// EJERCICIO 6 · Operadores lógicos y cortocircuito
// ============================================================
console.log("\n--- Ejercicio 6 ---");
{
  let usuario = null;
  let nombre = usuario && "Ana";
  console.log(nombre);

  let mensaje = "" || "Bienvenido";
  console.log(mensaje);

  // ¿Qué imprime cada línea? Explica el concepto de "cortocircuito"
  // (short-circuit evaluation) en los operadores && y ||.
  // TU RESPUESTA:
  //
}

// ============================================================
// EJERCICIO 7 · Combinando comparación y lógicos
// ============================================================
console.log("\n--- Ejercicio 7 ---");
{
  let edad = 17;
  let tieneConsentimiento = true;

  let puedeRegistrarse = edad >= 18 || (edad >= 14 && tieneConsentimiento);
  console.log(puedeRegistrarse);

  // Calcula el resultado paso a paso, indicando qué subexpresión se
  // evalúa primero y por qué.
  // TU RESPUESTA:
  //
}

// =================================================
// NIVEL 3 — RETO
// (ternario, coalescencia nula, truthy/falsy avanzado)
// =================================================

// ============================================================
// EJERCICIO 8 · Ternario anidado
// ============================================================
console.log("\n--- Ejercicio 8 ---");
{
  let nota = 6;

  let calificacion = nota >= 9 ? "Sobresaliente"
                   : nota >= 7 ? "Notable"
                   : nota >= 5 ? "Aprobado"
                   : "Suspenso";

  console.log(calificacion);

  // Cambia el valor de "nota" a 9, a 6 y a 3, y anota el resultado en
  // cada caso. Después, reescribe el mismo bloque usando if / else if y
  // compara la legibilidad de ambas versiones.
  // TU RESPUESTA:
  //

  // TODO: versión con if / else if
}

// ============================================================
// EJERCICIO 9 · || frente a ?? (coalescencia nula)
// ============================================================
console.log("\n--- Ejercicio 9 ---");
{
  let porcentaje = 0;

  let valor = porcentaje || 10;
  let valorSeguro = porcentaje ?? 10;

  console.log(valor);
  console.log(valorSeguro);

  // Explica por qué "valor" y "valorSeguro" son distintos aunque
  // "porcentaje" vale lo mismo en ambos casos. ¿Cuál de los dos
  // operadores sería correcto usar si 0 es un descuento válido?
  // TU RESPUESTA:
  //
}

// ============================================================
// EJERCICIO 10 · Truthy / falsy con distintos tipos de dato
// ============================================================
console.log("\n--- Ejercicio 10 ---");
{
  let valores = [0, "", null, undefined, NaN, "0", [], {}, " ", -0];

  // Para cada elemento de la lista anterior, indica (sin ejecutar nada
  // todavía) si se comportaría como truthy o falsy dentro de un if.
  // TU RESPUESTA:
  //

  // Después, comprueba tu respuesta con la línea siguiente, cambiando
  // el índice para cada valor de la lista (0, 1, 2… hasta 9).
  // ¿Hay algún resultado que no esperabas?
  if (valores[0]) { console.log("truthy"); } else { console.log("falsy"); }
}
