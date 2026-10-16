/*
  UT3 · Números aleatorios en JavaScript — Soluciones comentadas
  Módulo: 0612 Desarrollo Web en Entorno Cliente · 2.º DAW
  Uso: material del profesorado. Estas son soluciones posibles; el
  alumnado puede llegar a otras igualmente válidas.

  Ejecutar con:  node UT3_aleatorios_soluciones.js
  Los ejercicios 6 y 10 usan prompt y alert: en Node se saltan con un
  aviso y en el navegador se ejecutan normalmente.
*/

const enNavegador = typeof prompt === "function";

/**
 * Devuelve un entero aleatorio entre min y max, ambos incluidos.
 * Función auxiliar usada en varias soluciones.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const enteroAleatorio = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// ============================================================
// EJERCICIO 1 · Decimal aleatorio
// ============================================================
console.log("--- Ejercicio 1 ---");
{
  for (let i = 0; i < 5; i++) {
    console.log(Math.random());
  }
  // Menor valor posible: 0 (incluido).
  // Mayor valor: cualquier número muy próximo a 1, pero nunca 1.
  // Intervalo [0, 1).

  // QUÉ REVISAR: que el alumno entienda que el 1 está excluido. De eso
  // depende la fórmula del entero aleatorio.
}

// ============================================================
// EJERCICIO 2 · Escalar el rango
// ============================================================
console.log("\n--- Ejercicio 2 ---");
{
  const entre0y10 = Math.random() * 10; // [0, 10)
  const entre5y15 = Math.random() * 10 + 5; // [5, 15)

  console.log(entre0y10, entre5y15);

  // IDEA CLAVE: la multiplicación fija la AMPLITUD del rango y la suma
  // fija su ORIGEN.
}

// ============================================================
// EJERCICIO 3 · Dado de 6 caras
// ============================================================
console.log("\n--- Ejercicio 3 ---");
{
  const tirada = enteroAleatorio(1, 6);
  console.log(`Has sacado un ${tirada}`);
}

// ============================================================
// EJERCICIO 4 · Cara o cruz
// ============================================================
console.log("\n--- Ejercicio 4 ---");
{
  const resultado = Math.random() < 0.5 ? "Cara" : "Cruz";
  console.log(resultado);

  // Math.random() < 0.5 ocupa exactamente la mitad del intervalo
  // [0, 1), así que la probabilidad es del 50 %.
}

// ============================================================
// EJERCICIO 5 · Diez lanzamientos
// ============================================================
console.log("\n--- Ejercicio 5 ---");
{
  let suma = 0;

  for (let i = 1; i <= 10; i++) {
    const tirada = enteroAleatorio(1, 6);
    console.log(`Lanzamiento ${i}: ${tirada}`);
    suma += tirada;
  }

  console.log(`Suma total: ${suma}`);

  // ERROR FRECUENTE: declarar "suma" dentro del bucle. En ese caso se
  // reinicia en cada vuelta.
}

// ============================================================
// EJERCICIO 6 · Rango personalizado (navegador)
// ============================================================
console.log("\n--- Ejercicio 6 ---");
if (!enNavegador) {
  console.log("(usa prompt/alert: ejecútalo en el navegador)");
} else {
  const min = Number(prompt("Introduce el valor mínimo:"));
  const max = Number(prompt("Introduce el valor máximo:"));

  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    alert("Error: los dos valores deben ser números enteros.");
  } else if (min >= max) {
    alert("Error: el mínimo debe ser menor que el máximo.");
  } else {
    alert(`Número aleatorio entre ${min} y ${max}: ${enteroAleatorio(min, max)}`);
  }
}
/*
  PUNTOS DE CONVERSIÓN DE TIPOS (RA02 d):

  Situación                      Resultado   Consecuencia
  -----------------------------  ---------   ----------------------------------
  Number("abc")                  NaN         Number.isInteger(NaN) es false,
                                             así que se detecta el error.
  Number("")                     0           Una cadena vacía se acepta como 0.
  Number(null) (pulsa Cancelar)  0           Cancelar también se acepta como 0.

  Los dos últimos casos son una buena oportunidad para depurar con
  breakpoints y decidir en clase si deben tratarse aparte.
*/

// ============================================================
// EJERCICIO 7 · Elemento aleatorio de un array
// ============================================================
console.log("\n--- Ejercicio 7 ---");
{
  const frutas = ["manzana", "pera", "kiwi", "plátano"];

  const indice = Math.floor(Math.random() * frutas.length); // 0 .. length-1
  console.log(frutas[indice]);

  // ERROR FRECUENTE: usar enteroAleatorio(0, frutas.length). Así se
  // puede generar el índice 4, que no existe, y se obtiene undefined.
}

// ============================================================
// EJERCICIO 8 · PIN numérico
// ============================================================
console.log("\n--- Ejercicio 8 ---");
{
  const pin = String(enteroAleatorio(0, 9999)).padStart(4, "0");
  console.log(`Tu PIN es ${pin}`);

  // RESPUESTA A LA REFLEXIÓN: enteroAleatorio(0, 9999) devuelve un
  // NÚMERO. Los números no conservan ceros a la izquierda: 371 se
  // mostraría como 371, no como 0371. Por eso hay que convertirlo a
  // string y rellenarlo con padStart.
}
{
  // Solución alternativa, dígito a dígito:
  let pin = "";
  for (let i = 0; i < 4; i++) {
    pin += enteroAleatorio(0, 9);
  }
  console.log(pin);
}

// ============================================================
// EJERCICIO 9 · ¿Es realmente uniforme? (depuración)
// ============================================================
console.log("\n--- Ejercicio 9 ---");
{
  const enteroRound = (min, max) =>
    Math.round(Math.random() * (max - min)) + min;

  /**
   * Lanza un dado n veces con la función indicada y cuenta cada cara.
   * @param {Function} generador - función (min, max) => entero
   * @param {number} n - número de lanzamientos
   * @returns {Object} recuento por cara
   */
  function contarTiradas(generador, n) {
    const contadores = new Array(6).fill(0);

    for (let i = 0; i < n; i++) {
      const cara = generador(1, 6);
      contadores[cara - 1]++;
    }

    // Objeto con claves "Cara 1".."Cara 6" para que console.table sea legible
    const tabla = {};
    contadores.forEach((valor, i) => {
      tabla[`Cara ${i + 1}`] = valor;
    });
    return tabla;
  }

  console.table(contarTiradas(enteroAleatorio, 60000));
  console.table(contarTiradas(enteroRound, 60000));
}
/*
  RESULTADO ESPERADO (valores aproximados):

  Cara   Con Math.floor   Con Math.round
  ----   --------------   --------------
  1      ≈ 10 000         ≈  6 000
  2      ≈ 10 000         ≈ 12 000
  3      ≈ 10 000         ≈ 12 000
  4      ≈ 10 000         ≈ 12 000
  5      ≈ 10 000         ≈ 12 000
  6      ≈ 10 000         ≈  6 000

  EXPLICACIÓN DEL ERROR: Math.random() * 5 produce valores en [0, 5).
    - Solo redondean a 0 los valores de [0, 0.5) y solo redondean a 5
      los de [4.5, 5). Cada uno de esos tramos mide 0.5 unidades.
    - El resto de valores (1, 2, 3 y 4) recogen tramos de 1 unidad.
  Por tanto, los extremos salen con la mitad de probabilidad
  (10 % frente a 20 %).

  QUÉ EVALUAR (RA03 h): que el alumno documente el error con sus
  propias palabras y lo relacione con los datos observados, no solo que
  el código funcione.
*/

// ============================================================
// EJERCICIO 10 · Adivina el número (navegador)
// ============================================================
console.log("\n--- Ejercicio 10 ---");
if (!enNavegador) {
  console.log("(usa prompt/alert: ejecútalo en el navegador)");
} else {
  const MIN = 1;
  const MAX = 100;
  const MAX_INTENTOS = 7;

  const secreto = enteroAleatorio(MIN, MAX);
  let intentos = 0;
  let acertado = false;
  let cancelado = false;

  // while: el número de vueltas depende de lo que haga el usuario
  while (intentos < MAX_INTENTOS && !acertado && !cancelado) {
    const entrada = prompt(
      `Intento ${intentos + 1} de ${MAX_INTENTOS}. Número entre ${MIN} y ${MAX}:`,
    );

    // Cancelar: prompt devuelve null
    if (entrada === null) {
      cancelado = true;
      continue;
    }

    const numero = Number(entrada);

    // Una entrada no válida (vacía, texto, decimal o fuera de rango) no consume intento
    if (entrada.trim() === "" || !Number.isInteger(numero) || numero < MIN || numero > MAX) {
      alert(`Entrada no válida. Escribe un entero entre ${MIN} y ${MAX}.`);
      continue;
    }

    intentos++;

    if (numero === secreto) {
      acertado = true;
    } else if (numero < secreto) {
      alert("El número secreto es MAYOR.");
    } else {
      alert("El número secreto es MENOR.");
    }
  }

  if (acertado) {
    alert(`¡Correcto! Lo has adivinado en ${intentos} intento(s).`);
  } else if (cancelado) {
    alert(`Partida cancelada. El número era ${secreto}.`);
  } else {
    alert(`Has agotado los intentos. El número era ${secreto}.`);
  }
}
/*
  DECISIONES DE DISEÑO:
    - Tipo de bucle. Se usa while en lugar de for porque la partida
      puede terminar antes por acierto o por cancelación.
    - Entradas no válidas. No consumen intento. Es una decisión
      discutible; lo que importa es que el alumno la justifique.
    - Constantes. Se declaran en mayúsculas para no repetir "números
      mágicos" en el código.

  POR QUÉ BASTAN 7 INTENTOS: con búsqueda binaria, cada intento divide
  por 2 los candidatos restantes: 100 → 50 → 25 → 13 → 7 → 4 → 2 → 1.
  Como 2^7 = 128 ≥ 100, siete intentos siempre alcanzan.

  RÚBRICA ORIENTATIVA (CE RA03 e, RA02 e/f):

  Aspecto               Qué comprobar
  -------------------   ------------------------------------------------
  Funcionamiento        Genera el secreto y compara correctamente.
  Control de entradas   Trata null, texto, decimales y valores fuera de
                        rango.
  Estructura            Condición de salida del bucle correcta.
  Justificación         Comentarios que explican las decisiones tomadas.
*/

// ============================================================
// AMPLIACIÓN · PIN con crypto.getRandomValues()
// ============================================================
console.log("\n--- Ampliación ---");
{
  /**
   * Genera un dígito 0-9 criptográficamente seguro.
   * Descarta los valores 250-255 para evitar el sesgo del módulo:
   * 256 no es múltiplo de 10, así que sin descartarlos los dígitos 0-5
   * saldrían algo más a menudo.
   */
  function digitoSeguro() {
    const buffer = new Uint8Array(1);
    do {
      crypto.getRandomValues(buffer); // API Web, no del lenguaje
    } while (buffer[0] >= 250);
    return buffer[0] % 10;
  }

  let pin = "";
  for (let i = 0; i < 4; i++) {
    pin += digitoSeguro();
  }
  console.log(`PIN seguro: ${pin}`);
}
/*
  DIFERENCIAS ENTRE AMBOS MECANISMOS:

                 Math.random()                 crypto.getRandomValues()
  ------------   ---------------------------   ---------------------------
  Origen         Objeto Math, nativo de        API Web Crypto, del entorno
                 ECMAScript.                   de ejecución (navegador).
  Generador      Pseudoaleatorio; sus valores  Criptográficamente seguro.
                 podrían predecirse.
  Uso adecuado   Juegos, simulaciones,         Contraseñas, tokens, PINs,
                 elecciones al azar.           claves.

  El descarte de los valores 250-255 es un buen punto de debate para el
  nivel de ampliación: sin él, el resultado tendría un sesgo pequeño
  pero real.
*/
