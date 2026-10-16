/*
  UT3 · Números aleatorios en JavaScript — Soluciones comentadas (versión básica)
  Módulo: 0612 Desarrollo Web en Entorno Cliente · 2.º DAW
  Uso: material del profesorado. Estas son soluciones posibles; el
  alumnado puede llegar a otras igualmente válidas.

  Todas las soluciones usan únicamente variables, operadores, plantillas
  literales y objetos predefinidos (Math, Number, String, console,
  prompt, alert). No hay funciones, condicionales ni bucles.
  (Los bloques { } y el if que separa Node del navegador son solo para
  poder ejecutar el archivo completo; no forman parte de las soluciones.)

  Ejecutar con:  node UT3_aleatorios_soluciones_basicos.js
  Los ejercicios 6 y 10 usan prompt y alert: en Node se saltan con un
  aviso y en el navegador se ejecutan normalmente.
*/

const enNavegador = typeof prompt === "function";

// ============================================================
// EJERCICIO 1 · Decimal aleatorio
// ============================================================
console.log("--- Ejercicio 1 ---");
{
  console.log(Math.random());
  console.log(Math.random());
  console.log(Math.random());
  console.log(Math.random());
  console.log(Math.random());
  // Menor valor posible: 0 (incluido).
  // Mayor valor: cualquier número muy próximo a 1, pero nunca 1.
  // Intervalo [0, 1).

  // QUÉ REVISAR: que el alumno entienda que el 1 está excluido. De eso
  // depende la fórmula del entero aleatorio.
  // IDEA PARA MÁS ADELANTE: la repetición de líneas es la motivación
  // natural para introducir los bucles.
}

// ============================================================
// EJERCICIO 2 · Escalar el rango
// ============================================================
console.log("\n--- Ejercicio 2 ---");
{
  const entre0y10 = Math.random() * 10; // [0, 10)
  const entre5y15 = Math.random() * 10 + 5; // [5, 15)

  console.log(entre0y10);
  console.log(entre5y15);

  // IDEA CLAVE: la multiplicación fija la AMPLITUD del rango y la suma
  // fija su ORIGEN.
}

// ============================================================
// EJERCICIO 3 · Dado de 6 caras
// ============================================================
console.log("\n--- Ejercicio 3 ---");
{
  const tirada = Math.floor(Math.random() * 6) + 1;
  console.log(`Has sacado un ${tirada}`);
}

// ============================================================
// EJERCICIO 4 · Cara o cruz
// ============================================================
console.log("\n--- Ejercicio 4 ---");
{
  const moneda = Math.floor(Math.random() * 2); // 0 o 1
  console.log(`Resultado (0 = cara, 1 = cruz): ${moneda}`);

  const esCara = Math.random() < 0.5;
  console.log(esCara); // true o false
  console.log(typeof esCara); // "boolean"

  // IDEA CLAVE: un operador de comparación produce un valor de tipo
  // boolean. Esto prepara el terreno para los condicionales.
}

// ============================================================
// EJERCICIO 5 · Dos dados
// ============================================================
console.log("\n--- Ejercicio 5 ---");
{
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  const suma = dado1 + dado2;

  console.log(`Dado 1: ${dado1} | Dado 2: ${dado2} | Suma: ${suma}`);
  // Suma mínima: 2 (1 + 1). Suma máxima: 12 (6 + 6).

  // DEBATE OPCIONAL: ¿Math.floor(Math.random() * 11) + 2 sería
  // equivalente? No lo es. Con dos dados el 7 es mucho más probable que
  // el 2 o el 12, mientras que esa fórmula da la misma probabilidad a
  // todas las sumas.
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

  const numero = Math.floor(Math.random() * (max - min + 1)) + min;

  alert(`Número aleatorio entre ${min} y ${max}: ${numero}`);
}
/*
  PRUEBA 1 — sin Number() (mínimo "5", máximo "10"):

  Operación                       Resultado           Motivo
  -----------------------------   -----------------   ---------------------------
  "10" - "5"                      5                   El operador - convierte los
                                                      strings a número.
  5 + 1                           6                   Suma numérica normal.
  Math.floor(Math.random() * 6)   un entero de 0 a 5  Sigue siendo numérico.
  3 + "5" (por ejemplo)           "35"                El operador + con un string
                                                      CONCATENA en lugar de sumar.

  Resultado: el alert muestra valores como "05", "35" o "55", que están
  fuera del rango pedido.

  PRUEBA 2 — con texto: Number("hola") devuelve NaN, y cualquier
  operación con NaN da NaN. El alert muestra NaN. Controlar este caso
  requiere condicionales; se retomará cuando se hayan visto.
*/

// ============================================================
// EJERCICIO 7 · Vocal aleatoria
// ============================================================
console.log("\n--- Ejercicio 7 ---");
{
  const vocales = "AEIOU";
  const posicion = Math.floor(Math.random() * vocales.length); // 0 .. 4

  console.log(vocales.charAt(posicion));
  // También es válido vocales[posicion].

  // ERROR FRECUENTE: Math.floor(Math.random() * vocales.length) + 1.
  // Esto genera las posiciones 1 a 5: nunca sale la A, y la posición 5
  // no existe (charAt(5) devuelve una cadena vacía).
}

// ============================================================
// EJERCICIO 8 · PIN numérico
// ============================================================
console.log("\n--- Ejercicio 8 ---");
{
  const numero = Math.floor(Math.random() * 10000); // 0 .. 9999
  const pin = String(numero).padStart(4, "0");

  console.log(`Tu PIN es ${pin}`);

  // RESPUESTA A LA REFLEXIÓN: el aleatorio es un NÚMERO, y los números
  // no conservan ceros a la izquierda: 371 se mostraría como 371, no
  // como 0371. Hay que convertirlo a string y rellenarlo con padStart.
}
{
  // Solución alternativa, dígito a dígito:
  const pin =
    `${Math.floor(Math.random() * 10)}` +
    `${Math.floor(Math.random() * 10)}` +
    `${Math.floor(Math.random() * 10)}` +
    `${Math.floor(Math.random() * 10)}`;

  console.log(pin);
}

// ============================================================
// EJERCICIO 9 · ¿Es realmente uniforme? (depuración)
// ============================================================
console.log("\n--- Ejercicio 9 ---");
/*
  TABLA COMPLETADA (escalado toma valores en [0, 5)):

  Cara   Valores de escalado   Amplitud del tramo
  ----   -------------------   ------------------
  1      [0, 0.5)              0.5
  2      [0.5, 1.5)            1
  3      [1.5, 2.5)            1
  4      [2.5, 3.5)            1
  5      [3.5, 4.5)            1
  6      [4.5, 5)              0.5

  EXPLICACIÓN DEL ERROR: Math.round redondea al entero más cercano. Por
  eso los extremos (1 y 6) solo reciben medio tramo cada uno y salen con
  la mitad de probabilidad: un 10 % frente al 20 % de las caras
  centrales. El dado está trucado.
*/
{
  // Corrección:
  const aleatorio = Math.random();
  const escalado = aleatorio * 6; // [0, 6)
  const truncado = Math.floor(escalado); // 0, 1, 2, 3, 4 o 5; cada uno con tramo de amplitud 1
  const cara = truncado + 1; // 1 .. 6

  console.log(cara);

  // QUÉ EVALUAR (RA03 h):
  //   - que el alumno haya usado realmente el breakpoint (puede pedirse
  //     una captura como evidencia);
  //   - que la tabla sea correcta;
  //   - que la explicación relacione la amplitud de cada tramo con la
  //     probabilidad.
}

// ============================================================
// EJERCICIO 10 · Ficha de personaje aleatoria (navegador)
// ============================================================
console.log("\n--- Ejercicio 10 ---");
if (!enNavegador) {
  console.log("(usa prompt/alert: ejecútalo en el navegador)");
} else {
  const nombre = prompt("Nombre del personaje:");

  const fuerza = Math.floor(Math.random() * 20) + 1; // 1 .. 20
  const vida = Math.floor(Math.random() * 51) + 50; // 50 .. 100
  const precision = Math.random().toFixed(2); // "0.00" .. "1.00" (string)

  const numeroCodigo = Math.floor(Math.random() * 1000); // 0 .. 999
  const codigo = `PJ-${String(numeroCodigo).padStart(3, "0")}`;

  const numeroColor = Math.floor(Math.random() * 16777216); // 16^6 colores: 0 .. FFFFFF
  const color = `#${numeroColor.toString(16).padStart(6, "0")}`;

  alert(`Ficha de ${nombre}
Fuerza: ${fuerza}
Vida: ${vida}
Precisión: ${precision}
Código: ${codigo}
Color: ${color}`);
}
/*
  PUNTOS CLAVE:
    - Vida. El rango 50..100 tiene 51 valores posibles (100 − 50 + 1).
      Es un error típico multiplicar por 50.
    - Precisión. toFixed(2) devuelve un STRING, no un número. Para
      operar con él habría que convertirlo con Number() (repaso de
      RA02 d).
    - Color. Cada canal RGB va de 00 a FF, así que hay 16^6 = 16 777 216
      colores. padStart(6, "0") evita colores inválidos como #3fa2c.
    - Saltos de línea. Las plantillas literales admiten saltos de línea
      reales. Otra opción es usar \n.
    - Cancelar. Si el usuario pulsa Cancelar, nombre vale null y la
      ficha muestra "Ficha de null". Es una buena pregunta para
      anticipar la necesidad de condicionales.

  RÚBRICA ORIENTATIVA (CE RA03 a, RA03 e, RA02 d):

  Aspecto         Qué comprobar
  -------------   ------------------------------------------------------
  Rangos          Cada dato respeta su rango, incluidos los extremos.
  Formato         El código y el color tienen ceros a la izquierda cuando
                  corresponde.
  Tipos           Explica que toFixed devuelve un string.
  Interacción     Pide el nombre y muestra la ficha correctamente.
  Investigación   Ha usado los métodos de MDN indicados y entiende qué
                  hacen.
*/

// ============================================================
// AMPLIACIÓN · crypto.randomUUID()
// ============================================================
console.log("\n--- Ampliación ---");
{
  const id = crypto.randomUUID(); // API Web Crypto, no del lenguaje
  console.log(id); // p. ej. "3b241101-e2bb-4255-8caf-4136c566a962"
}
/*
  DIFERENCIAS ENTRE AMBOS MECANISMOS:

                 Math.random()                 crypto.randomUUID() /
                                               crypto.getRandomValues()
  ------------   ---------------------------   ---------------------------
  Origen         Objeto Math, nativo de        API Web Crypto, del entorno
                 ECMAScript.                   de ejecución (navegador).
  Generador      Pseudoaleatorio; sus valores  Criptográficamente seguro.
                 podrían predecirse.
  Uso adecuado   Juegos, simulaciones,         Identificadores, tokens,
                 elecciones al azar.           contraseñas, claves.

  crypto.randomUUID() solo está disponible en contextos seguros: HTTPS o
  localhost. Si el alumno abre el HTML directamente con file://, el
  comportamiento puede variar según el navegador. Es un buen punto para
  comentar las restricciones de las APIs Web.
*/
