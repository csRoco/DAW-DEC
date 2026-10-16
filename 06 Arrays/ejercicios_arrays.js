/*
 * ============================================================
 *  UT4 · Arrays y sus métodos — EJERCICIOS PARA EL ALUMNO
 *  RA4 → CE d) Se han creado y utilizado arrays
 *        CE i) Se ha depurado y documentado el código
 *
 *  Instrucciones:
 *   - Completa cada TODO usando los MÉTODOS de los arrays indicados
 *     en cada ejercicio. No uses bucles for / while.
 *   - Ejecuta con: node ejercicios_arrays.js
 *   - Cada apartado muestra "OK", "FALLO" o "PENDIENTE" para que
 *     compruebes tu solución.
 *
 *  Muchos métodos reciben una función que se ejecuta con cada elemento
 *  (un "callback"). De momento basta con esta forma:
 *
 *      elemento => condición o valor
 *
 *      [1, 2, 3].map(n => n * 2)          → [2, 4, 6]
 *      [1, 2, 3].filter(n => n > 1)       → [2, 3]
 *
 *  Las funciones flecha se estudian a fondo en la carpeta 07.
 *
 *  CHULETA DE MÉTODOS
 *   Modifican el array original     push, pop, unshift, shift, splice, sort
 *   Devuelven un array nuevo         map, filter, slice, concat, [...array]
 *   Buscan / comprueban              indexOf, includes, find, findIndex,
 *                                    some, every, at
 *   Reducen a un único valor         reduce, join
 * ============================================================
 */

// Utilidades de comprobación (no hace falta modificarlas)
const comprobar = (apartado, obtenido, esperado) => {
  const ok = JSON.stringify(obtenido) === JSON.stringify(esperado);
  console.log(
    `${ok ? "OK   " : "FALLO"} ${apartado}`,
    ok
      ? ""
      : `→ obtenido: ${JSON.stringify(obtenido)} | esperado: ${JSON.stringify(esperado)}`,
  );
};
// Si un apartado lanza un error, los demás se siguen evaluando
const probar = (apartado, prueba) => {
  try {
    prueba();
  } catch (error) {
    console.log(`PENDIENTE ${apartado} → ${error.message}`);
  }
};

// ============================================================
// EJERCICIO 1 · Lista de la compra (consolidación)
//   push, pop, unshift, shift, indexOf, splice, includes, length
// ============================================================
console.log("--- Ejercicio 1 ---");
{
  const compra = ["pan", "leche", "huevos"];
  let ultimo;
  let primero;

  // Realiza estas operaciones EN ORDEN sobre "compra":
  // a) Añade "fruta" al final.
  // TODO

  // b) Añade "café" al principio.
  // TODO

  // c) Quita el último elemento y guárdalo en "ultimo".
  // TODO

  // d) Quita el primer elemento y guárdalo en "primero".
  // TODO

  // e) Sustituye "huevos" por dos elementos: "yogur" y "queso".
  //    Pista: busca su posición con indexOf y usa splice.
  // TODO

  // f) Comprueba si la lista contiene "queso" y en qué posición está "pan".
  const tieneQueso = undefined; // TODO
  const posicionPan = undefined; // TODO

  // g) Pregunta: ¿por qué "compra" puede ser const si su contenido cambia?
  // TU RESPUESTA:
  //

  probar("1", () => {
    comprobar("1 (contenido final)", compra, [
      "pan",
      "leche",
      "yogur",
      "queso",
    ]);
    comprobar("1 (valores devueltos)", [ultimo, primero], ["fruta", "café"]);
    comprobar(
      "1 (búsquedas)",
      [tieneQueso, posicionPan, compra.length],
      [true, 0, 4],
    );
  });
}

// ============================================================
// EJERCICIO 2 · Inventario de una tienda (consolidación)
//   find, findIndex, some, every, at
// ============================================================
console.log("\n--- Ejercicio 2 ---");
{
  const productos = [
    { nombre: "Teclado", precio: 25, stock: 10 },
    { nombre: "Ratón", precio: 15, stock: 0 },
    { nombre: "Monitor", precio: 180, stock: 4 },
    { nombre: "Portátil", precio: 750, stock: 2 },
    { nombre: "Webcam", precio: 40, stock: 0 },
    { nombre: "Tablet", precio: 320, stock: 7 },
  ];

  // a) El primer producto agotado (stock 0).
  const primerAgotado = undefined; // TODO

  // b) La posición del "Monitor" en el array.
  const posicionMonitor = undefined; // TODO

  // c) ¿Hay algún producto de más de 500 €? (true / false)
  const hayCaros = undefined; // TODO

  // d) ¿Tienen stock TODOS los productos? (true / false)
  const todosConStock = undefined; // TODO

  // e) El último producto, usando un índice negativo.
  const ultimoProducto = undefined; // TODO

  // f) Busca una "Impresora" con find y con findIndex.
  //    ¿Qué devuelve cada método cuando no encuentra nada?
  const impresora = undefined; // TODO
  const posImpresora = undefined; // TODO
  // TU RESPUESTA:
  //

  probar("2a", () => comprobar("2a", primerAgotado.nombre, "Ratón"));
  probar("2b", () => comprobar("2b", posicionMonitor, 2));
  probar("2c", () => comprobar("2c", hayCaros, true));
  probar("2d", () => comprobar("2d", todosConStock, false));
  probar("2e", () => comprobar("2e", ultimoProducto.nombre, "Tablet"));
  probar("2f", () =>
    comprobar("2f", [impresora === undefined, posImpresora], [true, -1]),
  );
}

// ============================================================
// EJERCICIO 3 · Notas del grupo (aplicación)
//   map, filter, sort, slice, join
// ============================================================
console.log("\n--- Ejercicio 3 ---");
{
  const alumnos = [
    { nombre: "Ana", nota: 7.5 },
    { nombre: "Bruno", nota: 4.2 },
    { nombre: "Carla", nota: 9.1 },
    { nombre: "David", nota: 5 },
    { nombre: "Elena", nota: 3.8 },
    { nombre: "Fran", nota: 6.4 },
  ];

  // a) Un array solo con los nombres.
  const nombres = undefined; // TODO

  // b) Un array con los alumnos aprobados (nota >= 5).
  const aprobados = undefined; // TODO

  // c) Un array con los NOMBRES de los suspensos, encadenando dos métodos.
  const nombresSuspensos = undefined; // TODO

  // d) Un ranking ordenado de mayor a menor nota.
  //    ¡El array "alumnos" NO debe cambiar de orden! Pista: [...alumnos]
  const ranking = undefined; // TODO

  // e) Un texto con los 3 primeros del ranking: "Nombre1, Nombre2, Nombre3"
  const podio = undefined; // TODO

  // f) Ordena "numeros" de menor a mayor de dos formas: con sort() sin
  //    argumentos y con sort((a, b) => a - b). Usa copias.
  //    ¿Por qué no dan el mismo resultado?
  const numeros = [10, 1, 25, 3];
  const ordenMal = undefined; // TODO
  const ordenBien = undefined; // TODO
  // TU RESPUESTA:
  //

  probar("3a", () =>
    comprobar("3a", nombres, [
      "Ana",
      "Bruno",
      "Carla",
      "David",
      "Elena",
      "Fran",
    ]),
  );
  probar("3b", () =>
    comprobar(
      "3b",
      aprobados.map((a) => a.nombre),
      ["Ana", "Carla", "David", "Fran"],
    ),
  );
  probar("3c", () => comprobar("3c", nombresSuspensos, ["Bruno", "Elena"]));
  probar("3d", () => {
    comprobar(
      "3d",
      ranking.map((a) => a.nombre),
      ["Carla", "Ana", "Fran", "David", "Bruno", "Elena"],
    );
    comprobar("3d (original intacto)", alumnos[0].nombre, "Ana");
  });
  probar("3e", () => comprobar("3e", podio, "Carla, Ana, Fran"));
  probar("3f", () =>
    comprobar(
      "3f",
      [ordenMal, ordenBien],
      [
        [1, 10, 25, 3],
        [1, 3, 10, 25],
      ],
    ),
  );
}

// ============================================================
// EJERCICIO 4 · Ventas del día (aplicación)
//   reduce
// ============================================================
console.log("\n--- Ejercicio 4 ---");
{
  const ventas = [
    { producto: "Teclado", categoria: "periféricos", unidades: 3, precio: 25 },
    { producto: "Monitor", categoria: "pantallas", unidades: 1, precio: 180 },
    { producto: "Ratón", categoria: "periféricos", unidades: 4, precio: 15 },
    { producto: "Tablet", categoria: "equipos", unidades: 2, precio: 320 },
    { producto: "Webcam", categoria: "periféricos", unidades: 2, precio: 40 },
  ];

  // reduce recorre el array acumulando un resultado:
  //   array.reduce((acumulador, elemento) => nuevoAcumulador, valorInicial)

  // a) Total de unidades vendidas.
  const totalUnidades = undefined; // TODO

  // b) Facturación total (unidades × precio de cada venta).
  const facturacion = undefined; // TODO

  // c) La venta con mayor importe (unidades × precio).
  //    Pista: el acumulador puede ser la "mejor venta hasta ahora".
  const ventaMayor = undefined; // TODO

  // d) Un objeto con el importe total de cada categoría:
  //    { periféricos: ..., pantallas: ..., equipos: ... }
  //    Pista: el valor inicial es {}. Recuerda devolver el acumulador.
  const porCategoria = undefined; // TODO

  // e) Pregunta: ¿qué ocurre si en a) no indicas el valor inicial 0?
  //    ¿Y si además el array estuviera vacío?
  // TU RESPUESTA:
  //

  probar("4a", () => comprobar("4a", totalUnidades, 13));
  probar("4b", () => comprobar("4b", facturacion, 1050));
  probar("4c", () => comprobar("4c", ventaMayor.producto, "Tablet"));
  probar("4d", () =>
    comprobar("4d", porCategoria, {
      periféricos: 230,
      pantallas: 180,
      equipos: 640,
    }),
  );
}

// ============================================================
// EJERCICIO 5 · Lista de reproducción (reto)
//   encadenamiento de métodos sin modificar el original
// ============================================================
console.log("\n--- Ejercicio 5 ---");
{
  const canciones = [
    {
      titulo: "Bohemian Rhapsody",
      artista: "Queen",
      duracion: 354,
      genero: "rock",
      reproducciones: 1200,
    },
    {
      titulo: "Blinding Lights",
      artista: "The Weeknd",
      duracion: 200,
      genero: "pop",
      reproducciones: 3400,
    },
    {
      titulo: "Back in Black",
      artista: "AC/DC",
      duracion: 255,
      genero: "rock",
      reproducciones: 900,
    },
    {
      titulo: "Levitating",
      artista: "Dua Lipa",
      duracion: 203,
      genero: "pop",
      reproducciones: 2100,
    },
    {
      titulo: "Don't Stop Me Now",
      artista: "Queen",
      duracion: 209,
      genero: "rock",
      reproducciones: 1800,
    },
    {
      titulo: "Bad Guy",
      artista: "Billie Eilish",
      duracion: 194,
      genero: "pop",
      reproducciones: 2800,
    },
    {
      titulo: "Hotel California",
      artista: "Eagles",
      duracion: 390,
      genero: "rock",
      reproducciones: 1500,
    },
  ];
  // La duración está en segundos.

  // a) Los TÍTULOS de las 3 canciones más reproducidas, de más a menos,
  //    en una sola expresión encadenada.
  const top3 = undefined; // TODO

  // b) La duración total de las canciones de rock en formato "m:ss".
  //    Pista: filter + reduce, y después Math.floor, % y padStart.
  const duracionRock = undefined; // TODO

  // c) La lista de artistas SIN REPETIR, ordenada alfabéticamente.
  //    Pista: filter recibe también la posición y el array:
  //           filter((elemento, i, lista) => ...)
  const artistas = undefined; // TODO

  // d) ¿Duran TODAS las canciones pop menos de 4 minutos? (true / false)
  const popCortas = undefined; // TODO

  // e) Las canciones de rock, de la más corta a la más larga, con este
  //    formato: "Queen - Don't Stop Me Now (3:29)"
  const resumenRock = undefined; // TODO

  probar("5a", () =>
    comprobar("5a", top3, ["Blinding Lights", "Bad Guy", "Levitating"]),
  );
  probar("5b", () => comprobar("5b", duracionRock, "20:08"));
  probar("5c", () =>
    comprobar("5c", artistas, [
      "AC/DC",
      "Billie Eilish",
      "Dua Lipa",
      "Eagles",
      "Queen",
      "The Weeknd",
    ]),
  );
  probar("5d", () => comprobar("5d", popCortas, true));
  probar("5e", () =>
    comprobar("5e", resumenRock, [
      "Queen - Don't Stop Me Now (3:29)",
      "AC/DC - Back in Black (4:15)",
      "Queen - Bohemian Rhapsody (5:54)",
      "Eagles - Hotel California (6:30)",
    ]),
  );
  probar("5 (original intacto)", () =>
    comprobar("5 (original intacto)", canciones[0].titulo, "Bohemian Rhapsody"),
  );
}
