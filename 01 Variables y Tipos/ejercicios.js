/*
  BATERÍA DE EJERCICIOS · JavaScript en entorno cliente (0612)
  2º DAW · IES Leonardo da Vinci

  Cómo usar este archivo en Visual Studio Code:
    1. Abre esta carpeta en VS Code.
    2. Completa cada ejercicio donde pone // TODO.
    3. Guarda el archivo (Ctrl + S).
    4. Abre la terminal integrada (Ctrl + ñ  o  Ctrl + `).
    5. Ejecuta:   node ejercicios.js
    6. Comprueba que lo que aparece en la consola coincide con el
       resultado indicado en el comentario "// → " de cada ejercicio.

  No hace falta ningún archivo HTML: todo se ejecuta con Node.js
  directamente desde la terminal.
*/

// ============================================================
// EJERCICIO 1 · Declaración de variables: let vs const
// ============================================================
console.log("--- Ejercicio 1 ---");

// a) Declara una variable "edad" con let, inicializada a 20.
//    Reasígnale el valor 21 y muestra el resultado con console.log.
// TODO

// b) Declara una constante "PI" con el valor 3.1416 y muéstrala.
//    Después, intenta reasignarle el valor 3 en una nueva línea.
//    Ejecuta el archivo y anota en un comentario qué error aparece.
// TODO


// ============================================================
// EJERCICIO 2 · var vs let: ámbito y hoisting
// ============================================================
console.log("\n--- Ejercicio 2 ---");

// a) Dentro de un bloque if (true) { ... }, declara "mensaje" con var
//    y asígnale un texto. Intenta usar console.log(mensaje) FUERA
//    del bloque. ¿Qué ocurre?
// TODO

// b) Repite el mismo experimento pero declarando "mensaje2" con let
//    dentro del bloque. ¿Qué diferencia observas al intentar
//    usarla fuera del bloque? (usa try/catch o coméntalo si da error)
// TODO


// ============================================================
// EJERCICIO 3 · Tipos primitivos y typeof
// ============================================================
console.log("\n--- Ejercicio 3 ---");

// Crea una variable para cada uno de estos tipos y muestra su
// typeof: string, number, boolean, undefined, null, symbol, bigint.
// Ejemplo ya resuelto:
let ejemploString = "hola";
console.log(typeof ejemploString); // → "string"

// TODO: number
// TODO: boolean
// TODO: undefined
// TODO: null   (recuerda: typeof null → "object", es un caso especial)
// TODO: symbol
// TODO: bigint


// ============================================================
// EJERCICIO 4 · Autoboxing
// ============================================================
console.log("\n--- Ejercicio 4 ---");

// a) Declara una variable de texto en minúsculas y usa el método
//    .toUpperCase() sobre ella directamente (sin guardar el resultado
//    en una variable intermedia). Muestra el resultado.
// TODO

// b) En un comentario, explica con tus palabras por qué esto
//    funciona si un string no es un objeto.
// TODO (comentario explicativo)


// ============================================================
// EJERCICIO 5 · Notación científica
// ============================================================
console.log("\n--- Ejercicio 5 ---");

// a) Declara la distancia Tierra-Sol aproximada: 1.5e8 (km) y muéstrala.
// TODO

// b) Declara un número muy pequeño usando notación científica
//    (por ejemplo, el tamaño de un virus: 1.2e-7) y muéstralo.
// TODO


// ============================================================
// EJERCICIO 6 · Sistemas numéricos: hexadecimal, octal y binario
// ============================================================
console.log("\n--- Ejercicio 6 ---");

// a) Declara un color en hexadecimal (0x...) y conviértelo a decimal
//    mostrando el valor directamente con console.log.
// TODO

// b) Declara un número en binario (0b...) que represente el 13
//    y compruébalo con console.log.
// TODO

// c) Declara un número en octal (0o...) y muestra su valor decimal.
// TODO


// ============================================================
// EJERCICIO 7 · Números especiales
// ============================================================
console.log("\n--- Ejercicio 7 ---");

// a) Provoca un NaN dividiendo 0 entre 0 y muéstralo.
// TODO

// b) Provoca un Infinity dividiendo 1 entre 0 y muéstralo.
// TODO

// c) Comprueba con console.log si NaN === NaN. ¿Qué obtienes?
// TODO


// ============================================================
// EJERCICIO 8 · Strings: creación y propiedades
// ============================================================
console.log("\n--- Ejercicio 8 ---");

// a) Crea dos strings, uno con comillas simples y otro con dobles,
//    y concaténalos con el operador + dejando un espacio entre ambos.
// TODO

// b) Muestra la longitud (.length) del string resultante.
// TODO


// ============================================================
// EJERCICIO 9 · Plantillas de string (template literals)
// ============================================================
console.log("\n--- Ejercicio 9 ---");

// a) Declara "nombre" y "cursoActual" (número), y construye con una
//    plantilla de string un mensaje: "Hola <nombre>, estás en <cursoActual>º de DAW"
// TODO

// b) Dentro de otra plantilla, incluye una expresión matemática,
//    por ejemplo el curso siguiente (cursoActual + 1).
// TODO


// ============================================================
// EJERCICIO 10 · Secuencias de escape
// ============================================================
console.log("\n--- Ejercicio 10 ---");

// a) Muestra un texto que ocupe dos líneas usando \n dentro de un
//    string normal (con comillas, sin plantilla).
// TODO

// b) Muestra un texto que contenga una comilla doble dentro de un
//    string delimitado también por comillas dobles, usando \".
// TODO


// ============================================================
// EJERCICIO 11 · Booleanos: truthy y falsy
// ============================================================
console.log("\n--- Ejercicio 11 ---");

// a) Declara "mayorDeEdad" como el resultado de comparar una edad
//    con 18 usando >=, y muéstralo.
// TODO

// b) Usa Boolean(...) para comprobar si estos valores son truthy o
//    falsy: 0, "", "hola", null, undefined, 42
// TODO (6 console.log, uno por valor)


// ============================================================
// EJERCICIO 12 · Operadores aritméticos
// ============================================================
console.log("\n--- Ejercicio 12 ---");

// a) Declara dos números y muestra el resultado de sumarlos,
//    restarlos, multiplicarlos, dividirlos y el resto (%) entre ellos.
// TODO

// b) Calcula 2 elevado a 10 usando el operador **.
// TODO

// c) Declara un contador en 0 e increméntalo dos veces con ++,
//    mostrando su valor final.
// TODO


// ============================================================
// EJERCICIO 13 · Relacionales, coerción y comparación estricta
// ============================================================
console.log("\n--- Ejercicio 13 ---");

// a) Compara el número 5 con el string "5" usando == y luego ===.
//    Muestra ambos resultados y comenta la diferencia.
// TODO

// b) Compara null == undefined y null === undefined. Comenta el resultado.
// TODO

// c) Comprueba si "10" > "9" (ambos strings). ¿El resultado te
//    sorprende? Coméntalo (pista: se comparan alfabéticamente).
// TODO


// ============================================================
// EJERCICIO 14 · Operadores lógicos y cortocircuito
// ============================================================
console.log("\n--- Ejercicio 14 ---");

// a) Declara "usuario" con el valor null, y usa || para asignar
//    "nombreMostrado" con "usuario" si existe o "Invitado" si no.
// TODO

// b) Usa && para mostrar un texto SOLO si una variable booleana
//    "sesionIniciada" es true.
// TODO

// c) Usa ! para invertir el valor de una variable booleana y muéstralo.
// TODO


// ============================================================
// EJERCICIO 15 · Objetos: mutabilidad y comparación por referencia
// ============================================================
console.log("\n--- Ejercicio 15 ---");

// a) Crea un objeto "persona1" con const y con las propiedades
//    nombre y edad. Modifica después el valor de "edad" directamente
//    (¿te deja hacerlo aunque sea const?). Muestra el objeto final.
// TODO

// b) Crea "persona2" con el MISMO contenido que persona1 (otro objeto
//    distinto) y compara persona1 === persona2. Comenta el resultado.
// TODO

// c) Crea "persona3 = persona1" (misma referencia) y compara
//    persona1 === persona3. Comenta la diferencia con el apartado b).
// TODO
