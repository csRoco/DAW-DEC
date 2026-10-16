/*
  SOLUCIONES — CUADROS DE DIÁLOGO EN JAVASCRIPT
  UT3. Utilización de objetos predefinidos del lenguaje — RA03

  Material de referencia para el profesor. alert, confirm y prompt solo
  existen en el navegador: enlaza este archivo desde un index.html con
      <script src="soluciones_cuadros_dialogo.js" defer></script>
  y abre la consola de las DevTools (F12).
*/

if (typeof prompt !== "function") {
  console.log("Este archivo usa alert, confirm y prompt: ábrelo en el navegador.");
  process.exit();
}

// =================================================
// NIVEL 1 — CONSOLIDACIÓN
// =================================================

// ============================================================
// EJERCICIO 1 · alert() básico
// ============================================================
console.log("--- Ejercicio 1 ---");
{
  alert("Bienvenido a la aplicación");
  console.log("Mensaje mostrado");

  // alert() es una llamada BLOQUEANTE: detiene por completo la ejecución
  // del script (y la interacción con la página) hasta que el usuario
  // pulsa el botón Aceptar. El console.log("Mensaje mostrado") no se
  // ejecuta hasta que el usuario cierra el cuadro de alert.
}

// ============================================================
// EJERCICIO 2 · prompt() y su valor de retorno
// ============================================================
console.log("\n--- Ejercicio 2 ---");
{
  let nombre = prompt("¿Cómo te llamas?");
  console.log(nombre); //        → Laura   (si escribe "Laura" y acepta)
  console.log(typeof nombre); // → string

  // prompt() devuelve SIEMPRE un valor de tipo string (o null si se
  // cancela), independientemente de lo que el usuario escriba, incluso
  // si escribe solo números.
}

// ============================================================
// EJERCICIO 3 · prompt() cancelado
// ============================================================
console.log("\n--- Ejercicio 3 ---");
{
  let edad = prompt("Introduce tu edad");
  console.log(edad);
  // Si el usuario pulsa Cancelar                       → null
  // Si el usuario deja el campo vacío y pulsa Aceptar  → "" (string vacío)

  // No es lo mismo: null y "" son dos valores distintos (aunque ambos son
  // falsy). Es un error común no distinguir "el usuario canceló" de "el
  // usuario no escribió nada".
}

// ============================================================
// EJERCICIO 4 · confirm() y su valor de retorno
// ============================================================
console.log("\n--- Ejercicio 4 ---");
{
  let respuesta = confirm("¿Deseas continuar?");
  console.log(respuesta); //        → true (Aceptar) / false (Cancelar)
  console.log(typeof respuesta); // → boolean

  // A diferencia de prompt(), confirm() siempre devuelve un valor de tipo
  // boolean, nunca string ni null.
}

// =================================================
// NIVEL 2 — APLICACIÓN
// =================================================

// ============================================================
// EJERCICIO 5 · prompt() dentro de una condición
// ============================================================
console.log("\n--- Ejercicio 5 ---");
{
  let contrasena = prompt("Introduce la contraseña");

  if (contrasena === "1234") {
    alert("Acceso concedido");
  } else {
    alert("Acceso denegado");
  }

  // Se usa === porque compara tanto el valor como el tipo, evitando
  // coincidencias inesperadas por coerción de tipo (por ejemplo, si en
  // algún punto "contrasena" pudiera ser un valor numérico, == podría
  // producir comparaciones erróneas por conversión implícita).
  //
  // Si el usuario cancela el prompt, "contrasena" valdrá null. Como
  // null !== "1234", el código entra en la rama else y muestra "Acceso
  // denegado", igual que si el usuario hubiera escrito una contraseña
  // incorrecta. El programa no distingue entre "cancelado" y
  // "contraseña incorrecta" en este ejemplo.
}

// ============================================================
// EJERCICIO 6 · prompt() con conversión numérica
// ============================================================
console.log("\n--- Ejercicio 6 ---");
{
  let entrada = prompt("Introduce tu edad");
  let edadNumero = Number(entrada);

  console.log(entrada, typeof entrada); //       → "20" (o lo que escriba), string
  console.log(edadNumero, typeof edadNumero); // → 20, number

  if (edadNumero >= 18) {
    alert("Eres mayor de edad");
  } else {
    alert("Eres menor de edad");
  }

  // prompt() siempre devuelve un string. Si se comparara directamente
  // "20" >= 18, JavaScript convertiría el string a número de forma
  // implícita y el resultado sería correcto (true), pero de forma oculta.
  // Convertir con Number() hace la conversión explícita y permite
  // validarla: un texto no numérico como "abc" se convierte en NaN, y
  // NaN >= 18 es siempre false, así que el programa diría "Eres menor de
  // edad" sin avisar del error. Con el valor ya convertido se puede
  // comprobar antes con Number.isNaN().
  //
  // Ojo: si se comparan DOS strings ("9" >= "18"), la comparación es
  // alfabética y da true. Es otro motivo para convertir siempre.
}

// ============================================================
// EJERCICIO 7 · confirm() para controlar el flujo
// ============================================================
console.log("\n--- Ejercicio 7 ---");
{
  let borrar = confirm("¿Seguro que quieres eliminar el archivo?");

  borrar
    ? console.log("Archivo eliminado")
    : console.log("Operación cancelada");

  // El ternario reproduce exactamente el mismo comportamiento que el
  // if/else, evaluando "borrar" como condición booleana directamente
  // (sin necesidad de comparaciones adicionales, porque confirm() ya
  // devuelve un boolean).
}

// =================================================
// NIVEL 3 — RETO
// =================================================

// ============================================================
// EJERCICIO 8 · Validación de entrada vacía
// ============================================================
console.log("\n--- Ejercicio 8 ---");
{
  let ciudad = prompt("¿En qué ciudad vives?");

  if (ciudad) {
    alert("Vives en " + ciudad);
  } else {
    alert("No has introducido ninguna ciudad");
  }

  // Entrarían en el "else" los siguientes valores devueltos por prompt():
  //   - null   (el usuario cancela)
  //   - ""     (el usuario acepta sin escribir nada)
  //
  // Ambos son valores falsy. Cualquier otro string no vacío (incluido
  // "0" o " ") sería truthy y entraría en la rama del "if", aunque en el
  // caso de " " (solo un espacio) el mensaje mostraría "Vives en  "
  // (un valor poco útil pero técnicamente truthy).
}

// ============================================================
// EJERCICIO 9 · Cadena de validaciones con prompt() y confirm()
// ============================================================
console.log("\n--- Ejercicio 9 ---");
{
  let numeroTexto = prompt("Introduce un número entre 1 y 10");
  let numero = Number(numeroTexto);

  if (numeroTexto === null) {
    // 1. El usuario pulsó Cancelar
    console.log("El usuario canceló la entrada");
  } else if (numeroTexto.trim() === "") {
    // 2. El usuario aceptó sin escribir nada, o solo escribió espacios
    console.log("No se introdujo ningún valor");
  } else if (Number.isNaN(numero)) {
    // 3. Lo escrito no se puede convertir a un número válido (ej. "abc")
    console.log("El valor introducido no es un número");
  } else if (numero < 1 || numero > 10) {
    // 4. Es un número válido pero fuera del rango pedido
    let repetir = confirm("El número está fuera de rango. ¿Quieres intentarlo de nuevo?");
    console.log(repetir);
  } else {
    // 5. Número válido y dentro de rango
    console.log("Número válido: " + numero);
  }

  // El orden importa: si se comprobara numeroTexto.trim() === "" ANTES
  // que numeroTexto === null, el programa lanzaría un error, porque
  // null no tiene el método .trim() (no se puede llamar a un método
  // sobre null). Por eso siempre hay que descartar primero el caso null
  // antes de operar sobre el valor como si fuera un string.
}

// ============================================================
// EJERCICIO 10 · Diferencias entre los tres cuadros de diálogo
// ============================================================
console.log("\n--- Ejercicio 10 ---");
{
  alert("Este es un aviso");
  let ok = confirm("¿Confirmas la acción?");
  let dato = prompt("Escribe un dato");

  console.log(ok, typeof ok); //     → true/false, boolean
  console.log(dato, typeof dato); // → texto, string  (o null, object si se cancela)

  //   Cuadro    | Botones              | Qué devuelve                        | Tipo
  //   --------- | -------------------- | ----------------------------------- | -------------
  //   alert()   | Aceptar              | undefined                           | undefined
  //   confirm() | Aceptar / Cancelar   | true (Aceptar) / false (Cancelar)   | boolean
  //   prompt()  | Aceptar / Cancelar   | texto escrito / null si se cancela  | string / null
  //
  // Nota: typeof null devuelve "object" por una peculiaridad histórica
  // del lenguaje, aunque null es un valor primitivo.
  //
  // Estos métodos apenas se usan en aplicaciones web reales porque:
  //   - Son bloqueantes: detienen toda la página mientras están abiertos.
  //   - No se pueden personalizar visualmente (estilo, colores, disposición).
  //   - No son accesibles ni responsive.
  //   - No permiten varios campos de entrada a la vez.
  //
  // Por eso, en aplicaciones profesionales se sustituyen por formularios
  // HTML y ventanas modales construidas con HTML/CSS/JavaScript, que sí
  // se pueden estilizar, validar de forma más flexible y no bloquean la
  // ejecución del resto de la página.
}
