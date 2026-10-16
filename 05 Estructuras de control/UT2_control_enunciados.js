/*
  UT2 · Ejercicios de estructuras de control
  Módulo: 0612 Desarrollo Web en Entorno Cliente · 2.º DAW
  Unidad de Trabajo: UT2. Manejo de la sintaxis del lenguaje

  Ej.  Nivel          Estructuras principales                          CE
  ---  -------------  -----------------------------------------------  ----------------
  1    Consolidación  do...while, if...else if, switch, ternario       RA02 e), f)
  2    Aplicación     do...while, switch, try...catch, throw, arrays   RA02 e), f), h)
  3    Aplicación     for...of, for, continue, break, else if, arrays  RA02 e), f)
  4    Reto           for...of, do...while, continue, operador %       RA02 e), f)

  Criterios de evaluación (RA02):
    e) Se han utilizado mecanismos de decisión en la creación de bloques
       de sentencias.
    f) Se han utilizado bucles y se ha verificado su funcionamiento.
    h) Se han utilizado herramientas y entornos para facilitar la
       programación, prueba y depuración del código.

  INSTRUCCIONES GENERALES
    - Cada ejercicio se entrega en un fichero main.js, enlazado desde un
      index.html con <script src="main.js" defer></script>.
    - NO se pueden usar funciones propias. Sí puedes usar arrays y los
      métodos de objetos predefinidos vistos en clase (Number, Math,
      toFixed, trim, push…).
    - Usa const y let. No uses var.
*/

// ============================================================
// EJERCICIO 1 · Taquilla de cine (consolidación)
// ============================================================
{
  // Programa que calcula el precio de una entrada.
  //
  // REQUISITOS
  //   1. Pide la edad con prompt. Repite la pregunta mientras no sea un
  //      entero entre 0 y 120 (do...while).
  //   2. Pide el día de la semana como número (1 = lunes … 7 = domingo),
  //      con la misma validación.
  //   3. Obtén el nombre del día con un switch.
  //   4. Calcula el precio base con if...else if:
  //
  //        Edad              Precio
  //        ---------------   ------
  //        Menos de 4 años   Gratis
  //        De 4 a 12 años    5 €
  //        De 13 a 64 años   8 €
  //        65 años o más     5 €
  //
  //   5. Los miércoles (día del espectador) hay un 20 % de descuento.
  //      Calcula el descuento con el OPERADOR TERNARIO.
  //   6. Muestra en un único alert el día, la edad, el precio base, el
  //      descuento y el total con 2 decimales.
  //
  // PRUEBAS
  //   Edad             Día            Total esperado
  //   --------------   ------------   ------------------
  //   abc, luego 30    9, luego 3     6.40 € (miércoles)
  //   70               6              5.00 €
  //   3                1              0.00 €
  //
  // PREGUNTA: ¿qué ocurre si pulsas Cancelar al preguntar la edad? ¿Por qué?
  // TU RESPUESTA:
  //

  // TODO
}

// ============================================================
// EJERCICIO 2 · Cajero automático (aplicación)
// ============================================================
{
  // Simula un cajero con un saldo inicial de 100 €.
  //
  // REQUISITOS
  //   1. Muestra este menú con prompt y repítelo hasta que el usuario
  //      elija salir:
  //          1. Consultar saldo
  //          2. Ingresar
  //          3. Retirar
  //          4. Salir
  //   2. Gestiona las opciones con un switch. Una opción desconocida
  //      muestra "Opción no válida".
  //   3. Al ingresar o retirar, pide el importe y controla los errores
  //      con try...catch:
  //        - Si el importe no es un número mayor que 0, lanza un RangeError.
  //        - Si se intenta retirar más que el saldo, lanza un Error con
  //          el mensaje "Saldo insuficiente".
  //        - El bloque catch muestra el mensaje del error y el programa
  //          sigue funcionando.
  //   4. Guarda cada operación correcta en un array "movimientos" con el
  //      formato "+50.00 €" o "-20.00 €".
  //   5. Al salir, muestra todos los movimientos (recórrelos con un
  //      bucle) y el saldo final. Si no hay movimientos, indica "(ninguno)".
  //   6. Pulsar Cancelar en el menú también debe terminar el programa.
  //
  // PRUEBA: consultar → ingresar 50 → retirar 500 → retirar -5 →
  //         retirar 20 → opción 7 → salir.
  // Resultado esperado: dos errores, un aviso de opción no válida y un
  // saldo final de 130.00 €.

  // TODO
}

// ============================================================
// EJERCICIO 3 · Estadísticas de notas (aplicación)
// ============================================================
{
  // Parte de este array, que contiene algunos datos incorrectos:
  const notas = [7, 4.5, 11, 9.5, "8", 3, -1, 6, 10, 5];

  // REQUISITOS
  //   1. Recorre el array con for...of. Una nota NO ES VÁLIDA si no es
  //      de tipo number o está fuera del rango 0-10. Cuéntala y sáltala
  //      con continue.
  //   2. Con las notas válidas, calcula:
  //        - la media, con 2 decimales;
  //        - la nota máxima y la mínima;
  //        - el número de aprobados y de suspensos.
  //   3. Cuenta cuántas notas hay de cada calificación usando else if y
  //      un array de contadores [0, 0, 0, 0, 0]:
  //
  //        Calificación    Rango
  //        -------------   ------------------
  //        Insuficiente    menos de 5
  //        Suficiente      de 5 a menos de 6
  //        Bien            de 6 a menos de 7
  //        Notable         de 7 a menos de 9
  //        Sobresaliente   9 o más
  //
  //   4. Con un for clásico, busca la POSICIÓN de la primera nota válida
  //      de sobresaliente y detén el bucle con break. Si no hay
  //      ninguna, indícalo.
  //   5. Muestra todos los resultados por consola.
  //
  // RESULTADO ESPERADO: 7 notas válidas y 3 no válidas · media 6.43 ·
  // máxima 10 · mínima 3 · 5 aprobados · primer sobresaliente en la
  // posición 3.
  //
  // PISTA: fíjate en el 11 de la posición 2 antes de dar por buena tu
  // búsqueda.

  // TODO
}

// ============================================================
// EJERCICIO 4 · Cifrado César (reto)
// ============================================================
{
  // El cifrado César sustituye cada letra por la que está un número fijo
  // de posiciones más adelante en el alfabeto. Con desplazamiento 3, la
  // A pasa a ser D, la B pasa a ser E… y la Z vuelve al principio y pasa
  // a ser C.
  //
  // REQUISITOS
  //   1. Pide un texto (no puede estar vacío) y un desplazamiento
  //      entero, que puede ser negativo o mayor que 26. Valida ambos con
  //      do...while.
  //   2. Usa como alfabeto la constante ALFABETO (ya declarada abajo).
  //   3. Convierte el texto a mayúsculas y recórrelo carácter a carácter
  //      con for...of.
  //   4. Los caracteres que no están en el alfabeto (espacios, números,
  //      Ñ, vocales con tilde…) se copian sin cambios.
  //   5. Muestra el texto original y el cifrado.
  //
  // PRUEBAS
  //   Texto        Desplazamiento   Resultado
  //   ----------   --------------   ----------
  //   Hola Mundo   3                KROD PXQGR
  //   KROD PXQGR   -3               HOLA MUNDO
  //   Hola         29               KROD
  //
  // DECISIONES QUE DEBES JUSTIFICAR EN COMENTARIOS:
  //   - cómo consigues que la Z "vuelva" a la A;
  //   - cómo tratas los desplazamientos negativos (pista: en JavaScript,
  //     -1 % 26 vale -1);
  //   - por qué descifrar es lo mismo que cifrar con el desplazamiento
  //     opuesto.
  //
  // AMPLIACIÓN: incluye la Ñ en el alfabeto (27 letras) y conserva las
  // minúsculas del texto original.
  const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // TODO
}
