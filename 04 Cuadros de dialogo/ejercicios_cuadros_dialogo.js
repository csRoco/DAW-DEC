/*
  BATERÍA DE EJERCICIOS — CUADROS DE DIÁLOGO EN JAVASCRIPT
  UT3. Utilización de objetos predefinidos del lenguaje — RA03
  (alert, confirm, prompt — sin uso de funciones)

  Cómo usar este archivo:
    alert, confirm y prompt solo existen en el navegador. Enlaza este
    archivo desde un index.html:
        <script src="ejercicios_cuadros_dialogo.js" defer></script>
    y abre la consola de las DevTools (F12) para ver los console.log.
    Lee el código de cada ejercicio, PREDICE qué va a ocurrir y responde
    en "TU RESPUESTA".
*/

if (typeof prompt !== "function") {
  console.log("Este archivo usa alert, confirm y prompt: ábrelo en el navegador.");
  process.exit();
}

// =================================================
// NIVEL 1 — CONSOLIDACIÓN
// (sintaxis básica de alert, confirm y prompt)
// =================================================

// ============================================================
// EJERCICIO 1 · alert() básico
// ============================================================
console.log("--- Ejercicio 1 ---");
{
  alert("Bienvenido a la aplicación");
  console.log("Mensaje mostrado");

  // ¿Qué ocurre con la ejecución del script mientras el cuadro de alert
  // está abierto en pantalla? ¿En qué momento se ejecuta el console.log?
  // TU RESPUESTA:
  //
}

// ============================================================
// EJERCICIO 2 · prompt() y su valor de retorno
// ============================================================
console.log("\n--- Ejercicio 2 ---");
{
  let nombre = prompt("¿Cómo te llamas?");
  console.log(nombre);
  console.log(typeof nombre);

  // Si el usuario escribe "Laura" y pulsa Aceptar, ¿qué se muestra en
  // cada console.log? ¿Qué tipo de dato devuelve siempre prompt(),
  // independientemente de lo que escriba el usuario?
  // TU RESPUESTA:
  //
}

// ============================================================
// EJERCICIO 3 · prompt() cancelado
// ============================================================
console.log("\n--- Ejercicio 3 ---");
{
  let edad = prompt("Introduce tu edad");
  console.log(edad);

  // ¿Qué valor tiene la variable "edad" si el usuario pulsa el botón
  // Cancelar en lugar de escribir algo y aceptar? ¿Es lo mismo que si el
  // usuario deja el campo vacío y pulsa Aceptar?
  // TU RESPUESTA:
  //
}

// ============================================================
// EJERCICIO 4 · confirm() y su valor de retorno
// ============================================================
console.log("\n--- Ejercicio 4 ---");
{
  let respuesta = confirm("¿Deseas continuar?");
  console.log(respuesta);
  console.log(typeof respuesta);

  // ¿Qué valores puede devolver confirm() según el botón que pulse el
  // usuario? Indica el tipo de dato.
  // TU RESPUESTA:
  //
}

// =================================================
// NIVEL 2 — APLICACIÓN
// (combinación con condicionales y conversión de tipos)
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

  // Explica por qué es importante usar === en vez de == en esta
  // comparación. ¿Qué ocurriría si el usuario cancela el prompt en lugar
  // de escribir algo?
  // TU RESPUESTA:
  //
}

// ============================================================
// EJERCICIO 6 · prompt() con conversión numérica
// ============================================================
console.log("\n--- Ejercicio 6 ---");
{
  let entrada = prompt("Introduce tu edad");
  let edadNumero = Number(entrada);

  console.log(entrada, typeof entrada);
  console.log(edadNumero, typeof edadNumero);

  if (edadNumero >= 18) {
    alert("Eres mayor de edad");
  } else {
    alert("Eres menor de edad");
  }

  // ¿Por qué es necesario convertir "entrada" con Number() antes de
  // comparar? ¿Qué pasaría si se comparara directamente el string
  // devuelto por prompt() con el número 18 usando >=?
  // TU RESPUESTA:
  //
}

// ============================================================
// EJERCICIO 7 · confirm() para controlar el flujo
// ============================================================
console.log("\n--- Ejercicio 7 ---");
{
  let borrar = confirm("¿Seguro que quieres eliminar el archivo?");

  if (borrar) {
    console.log("Archivo eliminado");
  } else {
    console.log("Operación cancelada");
  }

  // Reescribe el bloque anterior usando el operador ternario en lugar de
  // if / else, manteniendo el mismo comportamiento.
  // TODO
}

// =================================================
// NIVEL 3 — RETO
// (validación, truthy/falsy y análisis de comportamiento)
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

  // Indica qué valores devueltos por prompt() harían que se ejecute la
  // rama del "else" en este código. Relaciónalo con el concepto de
  // truthy/falsy visto anteriormente.
  // TU RESPUESTA:
  //
}

// ============================================================
// EJERCICIO 9 · Cadena de validaciones con prompt() y confirm()
// ============================================================
console.log("\n--- Ejercicio 9 ---");
{
  let numeroTexto = prompt("Introduce un número entre 1 y 10");
  let numero = Number(numeroTexto);

  if (numeroTexto === null) {
    console.log("El usuario canceló la entrada");
  } else if (numeroTexto.trim() === "") {
    console.log("No se introdujo ningún valor");
  } else if (Number.isNaN(numero)) {
    console.log("El valor introducido no es un número");
  } else if (numero < 1 || numero > 10) {
    let repetir = confirm("El número está fuera de rango. ¿Quieres intentarlo de nuevo?");
    console.log(repetir);
  } else {
    console.log("Número válido: " + numero);
  }

  // Explica qué comprueba cada condición del if / else if, y en qué
  // orden deben evaluarse para que el código funcione correctamente.
  // ¿Qué ocurriría si se comprobara numeroTexto.trim() === "" antes que
  // numeroTexto === null?
  // TU RESPUESTA:
  //
}

// ============================================================
// EJERCICIO 10 · Diferencias entre los tres cuadros de diálogo
// ============================================================
console.log("\n--- Ejercicio 10 ---");
{
  alert("Este es un aviso");
  let ok = confirm("¿Confirmas la acción?");
  let dato = prompt("Escribe un dato");

  console.log(ok, typeof ok);
  console.log(dato, typeof dato);

  // Completa la tabla indicando, para cada cuadro de diálogo, qué botones
  // tiene, qué devuelve cada botón y el tipo de dato que devuelve.
  //
  //   Cuadro    | Botones            | Qué devuelve             | Tipo
  //   --------- | ------------------ | ------------------------ | -------
  //   alert()   |                    |                          |
  //   confirm() |                    |                          |
  //   prompt()  |                    |                          |
  //
  // ¿Por qué crees que estos tres métodos son poco utilizados en
  // aplicaciones web reales frente a otras formas de interactuar con el
  // usuario (formularios, modales personalizados con HTML/CSS)?
  // TU RESPUESTA:
  //
}
