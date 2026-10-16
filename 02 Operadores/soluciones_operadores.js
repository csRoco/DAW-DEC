/*
  SOLUCIONES — OPERADORES EN JAVASCRIPT
  UT2. Manejo de la sintaxis del lenguaje — RA02

  Material de referencia para el profesor. Ejecutar con:
      node soluciones_operadores.js
*/

// =================================================
// NIVEL 1 — CONSOLIDACIÓN
// =================================================

// ============================================================
// EJERCICIO 1 · Precedencia aritmética
// ============================================================
console.log("--- Ejercicio 1 ---");
{
  let resultado = 2 + 3 * 4 - (6 / 2);
  console.log(resultado); // → 11

  // Orden de evaluación:
  //   3 * 4          → 12
  //   (6 / 2)        → 3
  //   2 + 12 - 3     → 11
  //
  // La multiplicación y la división tienen mayor precedencia que la suma
  // y la resta. Los operadores de igual precedencia se evalúan de
  // izquierda a derecha. El paréntesis de (6 / 2) no cambia el resultado,
  // porque la división ya tenía prioridad sobre la resta.
}

// ============================================================
// EJERCICIO 2 · Incremento/decremento
// ============================================================
console.log("\n--- Ejercicio 2 ---");
{
  let x = 5;
  console.log(x++); // → 5  (se muestra el valor ANTES de incrementar;
  //                          x pasa a valer 6 después de esta línea)
  console.log(x); //   → 6
  console.log(++x); // → 7  (se incrementa ANTES de mostrar el valor)

  // x++ es postincremento (usa el valor actual y luego incrementa).
  // ++x es preincremento (incrementa primero y luego usa el nuevo valor).
}

// ============================================================
// EJERCICIO 3 · Asignación compuesta
// ============================================================
console.log("\n--- Ejercicio 3 ---");
{
  let saldo = 100;
  saldo += 50; // → 150
  saldo -= 30; // → 120
  saldo *= 2; //  → 240
  console.log(saldo); // → 240
}

// ============================================================
// EJERCICIO 4 · Operador módulo (resto)
// ============================================================
console.log("\n--- Ejercicio 4 ---");
{
  let n = 7;
  let esPar = n % 2 === 0;
  console.log(esPar); // → false  (7 % 2 = 1, y 1 === 0 es false)

  let m = -4;
  let esParM = m % 2 === 0;
  console.log(esParM); // → true  (-4 % 2 = -0, y -0 === 0 es true)

  // El operador % devuelve el resto de una división entera. Es útil, por
  // ejemplo, para determinar si un número es múltiplo de otro, repartir
  // elementos en grupos, o hacer que un índice "dé la vuelta" dentro de
  // un rango (n % longitudArray).
}

// =================================================
// NIVEL 2 — APLICACIÓN
// =================================================

// ============================================================
// EJERCICIO 5 · Igualdad débil vs estricta
// ============================================================
console.log("\n--- Ejercicio 5 ---");
{
  console.log(5 == "5"); //            → true   (== convierte "5" a número antes
  //                                              de comparar: coerción de tipo)
  console.log(5 === "5"); //           → false  (=== compara también el tipo:
  //                                              number vs string, sin coerción)
  console.log(null == undefined); //   → true   (== considera null y undefined
  //                                              "iguales" como caso especial)
  console.log(null === undefined); //  → false  (son tipos distintos)

  // === nunca convierte tipos: si los operandos no son del mismo tipo,
  // el resultado es directamente false. == sí realiza conversiones
  // implícitas según unas reglas fijas, lo que puede producir resultados
  // poco intuitivos.
}

// ============================================================
// EJERCICIO 6 · Operadores lógicos y cortocircuito
// ============================================================
console.log("\n--- Ejercicio 6 ---");
{
  let usuario = null;
  let nombre = usuario && "Ana";
  console.log(nombre); // → null
  // usuario es null, que es falsy, así que && devuelve inmediatamente el
  // primer operando sin evaluar el segundo: no llega a evaluar "Ana".

  let mensaje = "" || "Bienvenido";
  console.log(mensaje); // → "Bienvenido"
  // "" es falsy, así que || descarta ese valor y devuelve el segundo
  // operando.

  // Cortocircuito: && devuelve el primer valor falsy que encuentra (o el
  // último valor si todos son truthy). || devuelve el primer valor
  // truthy que encuentra (o el último si todos son falsy). En ambos
  // casos, si el resultado ya puede determinarse con el primer operando,
  // el segundo ni siquiera se evalúa.
}

// ============================================================
// EJERCICIO 7 · Combinando comparación y lógicos
// ============================================================
console.log("\n--- Ejercicio 7 ---");
{
  let edad = 17;
  let tieneConsentimiento = true;

  let puedeRegistrarse = edad >= 18 || (edad >= 14 && tieneConsentimiento);
  console.log(puedeRegistrarse); // → true

  // Paso 1: edad >= 18                   → false
  // Paso 2: edad >= 14                   → true
  // Paso 3: true && tieneConsentimiento  → true
  // Paso 4: false || true                → true
  //
  // El operador && tiene mayor precedencia que ||, por lo que el
  // paréntesis en este caso es redundante pero recomendable para
  // claridad: (edad >= 14 && tieneConsentimiento) se evalúa como una
  // unidad antes de aplicar ||.
}

// =================================================
// NIVEL 3 — RETO
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

  console.log(calificacion); // → "Aprobado"
  // nota = 9  → "Sobresaliente"
  // nota = 6  → "Aprobado"
  // nota = 3  → "Suspenso"

  // Versión con if / else if:
  if (nota >= 9) {
    calificacion = "Sobresaliente";
  } else if (nota >= 7) {
    calificacion = "Notable";
  } else if (nota >= 5) {
    calificacion = "Aprobado";
  } else {
    calificacion = "Suspenso";
  }
  console.log(calificacion); // → "Aprobado"

  // Ambas versiones son equivalentes en resultado. El ternario anidado es
  // más compacto pero, a partir de 2-3 niveles, puede perjudicar la
  // legibilidad; if/else if suele ser más claro para quien lee el código
  // por primera vez, aunque ocupe más líneas.
}

// ============================================================
// EJERCICIO 9 · || frente a ?? (coalescencia nula)
// ============================================================
console.log("\n--- Ejercicio 9 ---");
{
  let porcentaje = 0;

  let valor = porcentaje || 10;
  let valorSeguro = porcentaje ?? 10;

  console.log(valor); //       → 10  (0 es falsy, así que || lo descarta y usa 10)
  console.log(valorSeguro); // → 0   (?? solo sustituye si el valor es null o
  //                                   undefined; 0 no lo es, así que se conserva)

  // Si 0 es un descuento válido (por ejemplo, "sin descuento" pero un
  // valor legítimo que se quiere respetar), el operador correcto es ??,
  // porque || trataría erróneamente ese 0 como "valor ausente" y lo
  // sustituiría por el valor por defecto.
}

// ============================================================
// EJERCICIO 10 · Truthy / falsy con distintos tipos de dato
// ============================================================
console.log("\n--- Ejercicio 10 ---");
{
  let valores = [0, "", null, undefined, NaN, "0", [], {}, " ", -0];

  // El alumnado lo comprueba cambiando el índice a mano; aquí se recorren
  // todos de una vez para ver la tabla completa.
  for (let i = 0; i < valores.length; i++) {
    if (valores[i]) { console.log(i, "truthy"); } else { console.log(i, "falsy"); }
  }

  //   0            → falsy
  //   ""           → falsy
  //   null         → falsy
  //   undefined    → falsy
  //   NaN          → falsy
  //   "0"          → truthy   (string no vacío, aunque contenga el
  //                            carácter "0")
  //   []           → truthy   (un array, aunque esté vacío, es un objeto)
  //   {}           → truthy   (mismo motivo: es un objeto)
  //   " "          → truthy   (string con un espacio: no está vacío)
  //   -0           → falsy
  //
  // Resultados que suelen sorprender al alumnado: "0" (string) es truthy
  // a pesar de "parecer" el número cero; [] y {} son truthy aunque estén
  // vacíos, porque cualquier objeto (incluidos arrays) es siempre truthy,
  // independientemente de su contenido.
}
