/*
 * ============================================================
 *  UT4 · Arrays y sus métodos — SOLUCIÓN (solo profesorado)
 *  RA4 → CE d) Se han creado y utilizado arrays
 *        CE i) Se ha depurado y documentado el código
 *
 *  Ejecutar: node soluciones_arrays.js  → todo debe salir OK
 * ============================================================
 */

// Utilidad de comprobación
const comprobar = (apartado, obtenido, esperado) => {
  const ok = JSON.stringify(obtenido) === JSON.stringify(esperado);
  console.log(
    `${ok ? "OK   " : "FALLO"} ${apartado}`,
    ok
      ? ""
      : `→ obtenido: ${JSON.stringify(obtenido)} | esperado: ${JSON.stringify(esperado)}`,
  );
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

  // a) push añade al FINAL y devuelve la nueva longitud
  compra.push("fruta"); // ["pan", "leche", "huevos", "fruta"]

  // b) unshift añade al PRINCIPIO
  compra.unshift("café"); // ["café", "pan", "leche", "huevos", "fruta"]

  // c) pop quita el ÚLTIMO y lo devuelve
  ultimo = compra.pop(); // "fruta"

  // d) shift quita el PRIMERO y lo devuelve
  primero = compra.shift(); // "café"

  // e) splice(posición, cuántosBorrar, ...nuevos) borra e inserta a la vez
  const posHuevos = compra.indexOf("huevos"); // 2
  compra.splice(posHuevos, 1, "yogur", "queso");

  // f) includes devuelve un boolean; indexOf devuelve la posición (o -1)
  const tieneQueso = compra.includes("queso");
  const posicionPan = compra.indexOf("pan");

  comprobar("1 (contenido final)", compra, ["pan", "leche", "yogur", "queso"]);
  comprobar("1 (valores devueltos)", [ultimo, primero], ["fruta", "café"]);
  comprobar("1 (búsquedas)", [tieneQueso, posicionPan, compra.length], [true, 0, 4]);

  // TODOS estos métodos MODIFICAN el array original (son "mutadores").
  // Por eso compra puede ser const: const impide reasignar la variable,
  // no cambiar el contenido del array.
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

  // a) find devuelve el PRIMER elemento que cumple la condición
  const primerAgotado = productos.find((p) => p.stock === 0);

  // b) findIndex devuelve su POSICIÓN
  const posicionMonitor = productos.findIndex((p) => p.nombre === "Monitor");

  // c) some: ¿hay AL MENOS UNO que cumpla?
  const hayCaros = productos.some((p) => p.precio > 500);

  // d) every: ¿lo cumplen TODOS?
  const todosConStock = productos.every((p) => p.stock > 0);

  // e) at admite índices negativos: -1 es el último
  const ultimoProducto = productos.at(-1);

  // f) Cuando no encuentran nada: find → undefined, findIndex → -1
  const impresora = productos.find((p) => p.nombre === "Impresora");
  const posImpresora = productos.findIndex((p) => p.nombre === "Impresora");

  comprobar("2a", primerAgotado.nombre, "Ratón");
  comprobar("2b", posicionMonitor, 2);
  comprobar("2c", hayCaros, true);
  comprobar("2d", todosConStock, false);
  comprobar("2e", ultimoProducto.nombre, "Tablet");
  comprobar("2f", [impresora === undefined, posImpresora], [true, -1]);

  // Respuesta 2f: find devuelve undefined y findIndex devuelve -1.
  // Ojo con usar el resultado de find sin comprobarlo: impresora.nombre
  // lanzaría un TypeError ("Cannot read properties of undefined").
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

  // a) map TRANSFORMA: devuelve un array nuevo de la misma longitud
  const nombres = alumnos.map((a) => a.nombre);

  // b) filter SELECCIONA: devuelve un array nuevo con los que cumplen
  const aprobados = alumnos.filter((a) => a.nota >= 5);

  // c) Encadenar: primero filter, luego map
  const nombresSuspensos = alumnos.filter((a) => a.nota < 5).map((a) => a.nombre);

  // d) sort MODIFICA el array original: se ordena una copia hecha con [...]
  //    La función de comparación devuelve un número:
  //    negativo → a va antes, positivo → b va antes
  const ranking = [...alumnos].sort((a, b) => b.nota - a.nota);

  // e) slice NO modifica: copia el tramo [inicio, fin)
  const podio = ranking.slice(0, 3).map((a) => a.nombre).join(", ");

  // f) sort sin función de comparación ordena como TEXTO
  const numeros = [10, 1, 25, 3];
  const ordenMal = [...numeros].sort(); // [1, 10, 25, 3]
  const ordenBien = [...numeros].sort((a, b) => a - b); // [1, 3, 10, 25]

  comprobar("3a", nombres, ["Ana", "Bruno", "Carla", "David", "Elena", "Fran"]);
  comprobar("3b", aprobados.map((a) => a.nombre), ["Ana", "Carla", "David", "Fran"]);
  comprobar("3c", nombresSuspensos, ["Bruno", "Elena"]);
  comprobar("3d", ranking.map((a) => a.nombre), ["Carla", "Ana", "Fran", "David", "Bruno", "Elena"]);
  comprobar("3d (original intacto)", alumnos[0].nombre, "Ana");
  comprobar("3e", podio, "Carla, Ana, Fran");
  comprobar("3f", [ordenMal, ordenBien], [[1, 10, 25, 3], [1, 3, 10, 25]]);

  // Respuesta 3f: sin función de comparación, sort convierte los
  // elementos a string y los compara carácter a carácter: "10" va antes
  // que "3" porque "1" < "3". Con números hay que pasar siempre
  // (a, b) => a - b (ascendente) o (a, b) => b - a (descendente).
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
    { producto: "Ratón", categoria: "periféricos", unidades: 5, precio: 15 },
    { producto: "Tablet", categoria: "equipos", unidades: 2, precio: 320 },
    { producto: "Webcam", categoria: "periféricos", unidades: 2, precio: 40 },
  ];

  // a) reduce(acumulador, elemento) → el acumulador empieza en 0
  const totalUnidades = ventas.reduce((acu, v) => acu + v.unidades, 0);

  // b) Igual, pero acumulando el importe de cada venta
  const facturacion = ventas.reduce((acu, v) => acu + v.unidades * v.precio, 0);

  // c) El acumulador puede ser un elemento: nos quedamos con el mayor
  const ventaMayor = ventas.reduce((mayor, v) =>
    v.unidades * v.precio > mayor.unidades * mayor.precio ? v : mayor,
  );

  // d) El acumulador puede ser un objeto: importe por categoría
  const porCategoria = ventas.reduce((acu, v) => {
    acu[v.categoria] = (acu[v.categoria] ?? 0) + v.unidades * v.precio;
    return acu;
  }, {});

  comprobar("4a", totalUnidades, 13);
  comprobar("4b", facturacion, 1050);
  comprobar("4c", ventaMayor.producto, "Tablet");
  comprobar("4d", porCategoria, { periféricos: 230, pantallas: 180, equipos: 640 });

  // Respuesta 4e: sin valor inicial, reduce usa el primer elemento como
  // acumulador. En a) y b) eso daría un resultado erróneo (el acumulador
  // sería un OBJETO venta, no un número) y con un array vacío lanzaría
  // TypeError: "Reduce of empty array with no initial value".
  // En c) sí tiene sentido omitirlo: el primer elemento es el candidato
  // inicial a "mayor".
}

// ============================================================
// EJERCICIO 5 · Lista de reproducción (reto)
//   encadenamiento de métodos sin modificar el original
// ============================================================
console.log("\n--- Ejercicio 5 ---");
{
  const canciones = [
    { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 354, genero: "rock", reproducciones: 1200 },
    { titulo: "Blinding Lights", artista: "The Weeknd", duracion: 200, genero: "pop", reproducciones: 3400 },
    { titulo: "Back in Black", artista: "AC/DC", duracion: 255, genero: "rock", reproducciones: 900 },
    { titulo: "Levitating", artista: "Dua Lipa", duracion: 203, genero: "pop", reproducciones: 2100 },
    { titulo: "Don't Stop Me Now", artista: "Queen", duracion: 209, genero: "rock", reproducciones: 1800 },
    { titulo: "Bad Guy", artista: "Billie Eilish", duracion: 194, genero: "pop", reproducciones: 2800 },
    { titulo: "Hotel California", artista: "Eagles", duracion: 390, genero: "rock", reproducciones: 1500 },
  ];

  // a) Copia → ordenar → recortar → transformar
  const top3 = [...canciones]
    .sort((a, b) => b.reproducciones - a.reproducciones)
    .slice(0, 3)
    .map((c) => c.titulo);

  // b) filter + reduce, y después formato mm:ss con métodos de String
  const segundosRock = canciones
    .filter((c) => c.genero === "rock")
    .reduce((acu, c) => acu + c.duracion, 0);
  const duracionRock = `${Math.floor(segundosRock / 60)}:${String(segundosRock % 60).padStart(2, "0")}`;

  // c) Sin repetidos: un artista se queda solo si es la PRIMERA vez que
  //    aparece (indexOf devuelve la primera posición)
  const artistas = canciones
    .map((c) => c.artista)
    .filter((artista, i, lista) => lista.indexOf(artista) === i)
    .sort();
  // Alternativa con Set: [...new Set(canciones.map((c) => c.artista))].sort()

  // d) filter + every
  const popCortas = canciones
    .filter((c) => c.genero === "pop")
    .every((c) => c.duracion < 240);

  // e) Encadenamiento completo con formato
  const resumenRock = canciones
    .filter((c) => c.genero === "rock")
    .sort((a, b) => a.duracion - b.duracion) // filter ya devolvió un array nuevo
    .map((c) => `${c.artista} - ${c.titulo} (${Math.floor(c.duracion / 60)}:${String(c.duracion % 60).padStart(2, "0")})`);

  comprobar("5a", top3, ["Blinding Lights", "Bad Guy", "Levitating"]);
  comprobar("5b", duracionRock, "20:08");
  comprobar("5c", artistas, ["AC/DC", "Billie Eilish", "Dua Lipa", "Eagles", "Queen", "The Weeknd"]);
  comprobar("5d", popCortas, true);
  comprobar("5e", resumenRock, [
    "Queen - Don't Stop Me Now (3:29)",
    "AC/DC - Back in Black (4:15)",
    "Queen - Bohemian Rhapsody (5:54)",
    "Eagles - Hotel California (6:30)",
  ]);
  comprobar("5 (original intacto)", canciones[0].titulo, "Bohemian Rhapsody");

  // ERROR FRECUENTE en 5a: canciones.sort(...) sin copiar. El resultado
  // es correcto, pero el array original queda reordenado y el resto de
  // apartados (y la última comprobación) trabajan con otro orden.
  // En e) no hace falta copiar: filter ya crea un array nuevo.
}
