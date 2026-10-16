/*
  UT3 · Ejercicios de números aleatorios en JavaScript
  Módulo: 0612 Desarrollo Web en Entorno Cliente · 2.º DAW
  Unidad de Trabajo: UT3. Utilización de objetos predefinidos del lenguaje

  RA     CE                                                        Ejercicios
  ----   -------------------------------------------------------   ----------
  RA03   a) Se han identificado los objetos predefinidos            Todos
            del lenguaje
  RA03   e) Se han escrito sentencias que utilicen los objetos      6, 7, 10
            predefinidos del lenguaje para interactuar con el
            usuario
  RA03   h) Se ha depurado y documentado el código                  9
  RA02   e) Mecanismos de decisión · f) Bucles (repaso)             4, 5, 8, 10

  Cómo usar este archivo:
    - Completa cada ejercicio donde pone // TODO, dentro de su bloque { }.
      Los bloques evitan que choquen variables con el mismo nombre
      entre ejercicios.
    - Los ejercicios 1-5 y 7-9 se pueden ejecutar con:  node UT3_aleatorios_enunciados.js
    - Los ejercicios 6 y 10 usan prompt y alert, que solo existen en el
      navegador: enlaza este archivo desde un index.html con
      <script src="UT3_aleatorios_enunciados.js" defer></script>
*/

// ============================================================
// EJERCICIO 1 · Decimal aleatorio
// ============================================================
console.log("--- Ejercicio 1 ---");
{
  // Muestra por consola 5 números generados con Math.random().
  // Después responde en un comentario: ¿cuál es el menor valor
  // posible? ¿Y el mayor?
  // TODO
}

// ============================================================
// EJERCICIO 2 · Escalar el rango
// ============================================================
console.log("\n--- Ejercicio 2 ---");
{
  // Genera un decimal aleatorio entre 0 y 10. Después genera otro
  // entre 5 y 15.
  // Pista: multiplica para ampliar el rango y suma para desplazarlo.
  // TODO
}

// ============================================================
// EJERCICIO 3 · Dado de 6 caras
// ============================================================
console.log("\n--- Ejercicio 3 ---");
{
  // Simula el lanzamiento de un dado y muestra "Has sacado un X".
  // Usa una plantilla literal.
  // TODO
}

// ============================================================
// EJERCICIO 4 · Cara o cruz
// ============================================================
console.log("\n--- Ejercicio 4 ---");
{
  // Genera un aleatorio y muestra "Cara" o "Cruz", con un 50 % de
  // probabilidad para cada una.
  // Pista: compara Math.random() con 0.5.
  // TODO
}

// ============================================================
// EJERCICIO 5 · Diez lanzamientos
// ============================================================
console.log("\n--- Ejercicio 5 ---");
{
  // Lanza el dado 10 veces con un bucle for. Muestra cada resultado
  // y la suma total.
  // TODO
}

// ============================================================
// EJERCICIO 6 · Rango personalizado (navegador)
// ============================================================
console.log("\n--- Ejercicio 6 ---");
{
  // Pide al usuario un mínimo y un máximo con prompt. Genera un
  // entero en ese rango y muéstralo con alert.
  // Valida estas tres cosas:
  //   - que ambos valores sean números enteros;
  //   - que el mínimo sea menor que el máximo;
  //   - en caso de error, que se muestre un mensaje adecuado.
  // Recuerda: prompt devuelve un string, así que tendrás que convertirlo.
  // TODO
}

// ============================================================
// EJERCICIO 7 · Elemento aleatorio de un array
// ============================================================
console.log("\n--- Ejercicio 7 ---");
{
  // Dado el array siguiente, muestra una fruta al azar.
  // Pista: el índice debe estar entre 0 y frutas.length - 1.
  const frutas = ["manzana", "pera", "kiwi", "plátano"];

  // TODO
}

// ============================================================
// EJERCICIO 8 · PIN numérico
// ============================================================
console.log("\n--- Ejercicio 8 ---");
{
  // Genera un PIN de 4 dígitos como string. El PIN puede empezar
  // por 0: "0371" es un PIN válido.
  // Pregunta de reflexión: ¿por qué no basta con mostrar
  // directamente un entero aleatorio entre 0 y 9999?
  // TODO
}

// ============================================================
// EJERCICIO 9 · ¿Es realmente uniforme? (depuración)
// ============================================================
console.log("\n--- Ejercicio 9 ---");
{
  // Lanza el dado 60 000 veces y cuenta cuántas veces sale cada cara,
  // usando un array de contadores. Muestra el resultado con
  // console.table().
  // TODO

  // Después repite el experimento con esta versión alternativa,
  // que usa Math.round:
  const enteroRound = (min, max) =>
    Math.round(Math.random() * (max - min)) + min;

  // TODO

  // Compara ambas tablas y explica en un comentario qué error tiene
  // la segunda versión y por qué se produce.
  // TU RESPUESTA:
  //
}

// ============================================================
// EJERCICIO 10 · Adivina el número (navegador)
// ============================================================
console.log("\n--- Ejercicio 10 ---");
{
  // El programa elige un número entre 1 y 100 y el usuario tiene
  // 7 intentos para adivinarlo.
  //   - Tras cada intento, el programa indica si el número secreto
  //     es MAYOR o MENOR.
  //   - Al terminar, muestra si el usuario ha ganado y en cuántos
  //     intentos. Si ha perdido, muestra cuál era el número.
  //
  // Tendrás que decidir y justificar en comentarios:
  //   - qué tipo de bucle utilizas;
  //   - cómo tratas una entrada no válida (texto, decimales o números
  //     fuera de rango);
  //   - qué ocurre si el usuario pulsa Cancelar (prompt devuelve null);
  //   - por qué 7 intentos son siempre suficientes con una buena
  //     estrategia. Pista: búsqueda binaria.
  // TODO
}

// ============================================================
// AMPLIACIÓN · crypto.getRandomValues()
// ============================================================
console.log("\n--- Ampliación ---");
{
  // Math.random() NO es criptográficamente seguro, así que no debe
  // usarse para contraseñas, tokens o PINs reales. Para eso existe la
  // API Web crypto.getRandomValues().
  //
  // Rehaz el ejercicio 8 usando esta API. Explica en un comentario la
  // diferencia entre ambos mecanismos y en qué casos usarías cada uno.
  // TODO
}
