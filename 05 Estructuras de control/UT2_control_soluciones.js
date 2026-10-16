/*
  UT2 · Estructuras de control — Soluciones comentadas
  Módulo: 0612 Desarrollo Web en Entorno Cliente · 2.º DAW
  Uso: material del profesorado. Estas son soluciones posibles; hay otras
  igualmente válidas. Todas se han probado con los datos de los
  enunciados y no usan funciones propias.

  Ejecutar con:  node UT2_control_soluciones.js
  Los ejercicios 1, 2 y 4 usan prompt y alert: en Node se saltan con un
  aviso y en el navegador se ejecutan normalmente. El ejercicio 3 solo
  usa la consola y funciona en ambos.
*/

const enNavegador = typeof prompt === "function";

// ============================================================
// EJERCICIO 1 · Taquilla de cine (navegador)
// ============================================================
console.log("--- Ejercicio 1 ---");
if (!enNavegador) {
  console.log("(usa prompt/alert: ejecútalo en el navegador)");
} else {
  let edad;
  do {
    edad = Number(prompt("¿Qué edad tienes? (0-120)"));
  } while (!Number.isInteger(edad) || edad < 0 || edad > 120);

  let dia;
  do {
    dia = Number(prompt("Día de la semana (1 = lunes … 7 = domingo)"));
  } while (!Number.isInteger(dia) || dia < 1 || dia > 7);

  let nombreDia;
  switch (dia) {
    case 1: nombreDia = "lunes"; break;
    case 2: nombreDia = "martes"; break;
    case 3: nombreDia = "miércoles"; break;
    case 4: nombreDia = "jueves"; break;
    case 5: nombreDia = "viernes"; break;
    case 6: nombreDia = "sábado"; break;
    case 7: nombreDia = "domingo"; break;
  }

  let precioBase;
  if (edad < 4) {
    precioBase = 0;
  } else if (edad <= 12) {
    precioBase = 5;
  } else if (edad < 65) {
    precioBase = 8;
  } else {
    precioBase = 5;
  }

  const descuento = dia === 3 ? 0.2 : 0;
  const precioFinal = precioBase * (1 - descuento);

  alert(`Entrada para el ${nombreDia}
Edad: ${edad} años
Precio base: ${precioBase.toFixed(2)} €
Descuento: ${descuento * 100} %
Total: ${precioFinal.toFixed(2)} €`);
}
/*
  PUNTOS CLAVE
    - Orden del else if. Como las condiciones se evalúan en orden, no
      hace falta escribir edad >= 4 && edad <= 12.
    - switch sin default. El do...while ya garantiza que dia está entre
      1 y 7. Puede pedirse igualmente como buena práctica.
    - El ternario se usa para elegir un valor, no para ejecutar acciones.

  RESPUESTA A LA PREGUNTA: si se pulsa Cancelar, prompt devuelve null, y
  Number(null) es 0. El programa acepta una edad de 0 años. Lo mismo
  ocurre con una cadena vacía. Buen momento para comentar las
  conversiones de tipo (RA02 d).

  QUÉ REVISAR: que la validación se repita con datos incorrectos y que
  12 y 65 caigan en el tramo correcto (valores frontera).
*/

// ============================================================
// EJERCICIO 2 · Cajero automático (navegador)
// ============================================================
console.log("\n--- Ejercicio 2 ---");
if (!enNavegador) {
  console.log("(usa prompt/alert: ejecútalo en el navegador)");
} else {
  let saldo = 100;
  const movimientos = [];
  let opcion;

  do {
    opcion = prompt("CAJERO\n1. Consultar saldo\n2. Ingresar\n3. Retirar\n4. Salir");

    switch (opcion) {
      case "1":
        alert(`Saldo actual: ${saldo.toFixed(2)} €`);
        break;

      case "2":
      case "3":
        try {
          const importe = Number(prompt("Importe:"));

          if (!Number.isFinite(importe) || importe <= 0) {
            throw new RangeError("El importe debe ser un número mayor que 0");
          }
          if (opcion === "3" && importe > saldo) {
            throw new Error("Saldo insuficiente");
          }

          saldo += opcion === "2" ? importe : -importe;
          movimientos.push(`${opcion === "2" ? "+" : "-"}${importe.toFixed(2)} €`);
          alert(`Operación realizada. Saldo: ${saldo.toFixed(2)} €`);
        } catch (err) {
          alert(`Error: ${err.message}`);
        }
        break;

      case "4":
      case null: // el usuario pulsa Cancelar
        break;

      default:
        alert("Opción no válida");
    }
  } while (opcion !== "4" && opcion !== null);

  let resumen = "Movimientos de la sesión:\n";
  if (movimientos.length === 0) {
    resumen += "(ninguno)";
  } else {
    for (const m of movimientos) {
      resumen += `${m}\n`;
    }
  }
  resumen += `\nSaldo final: ${saldo.toFixed(2)} €`;
  alert(resumen);
}
/*
  PUNTOS CLAVE
    - case "2": y case "3": comparten bloque. Dentro se distingue la
      operación con el ternario.
    - Las opciones se comparan como texto ("1", "2"…) porque prompt
      devuelve strings y switch usa igualdad estricta. Si el alumno
      convierte con Number, los case deben ser numéricos. Y entonces
      Cancelar produce 0, que cae en default, lo que es otro buen punto
      de debate.
    - case null permite salir al pulsar Cancelar. Sin él, Cancelar
      mostraría "Opción no válida" y el menú no terminaría nunca.
    - Number.isFinite descarta a la vez NaN e Infinity.
    - try...catch dentro del bucle. Un error no detiene el programa: el
      menú vuelve a aparecer.

  DEBATE PARA CLASE: estas comprobaciones podrían hacerse solo con
  if...else. Las excepciones permiten agrupar todos los errores en un
  único punto de tratamiento; su ventaja real se verá con funciones y
  con las peticiones al servidor.
*/

// ============================================================
// EJERCICIO 3 · Estadísticas de notas
// ============================================================
console.log("\n--- Ejercicio 3 ---");
{
  const notas = [7, 4.5, 11, 9.5, "8", 3, -1, 6, 10, 5];

  let suma = 0;
  let validas = 0;
  let invalidas = 0;
  let aprobados = 0;
  let maxima = -Infinity;
  let minima = Infinity;
  // [Insuficiente, Suficiente, Bien, Notable, Sobresaliente]
  const categorias = [0, 0, 0, 0, 0];

  for (const nota of notas) {
    if (typeof nota !== "number" || nota < 0 || nota > 10) {
      invalidas++;
      continue; // pasa a la siguiente nota
    }

    validas++;
    suma += nota;
    if (nota > maxima) maxima = nota;
    if (nota < minima) minima = nota;
    if (nota >= 5) aprobados++;

    if (nota < 5) {
      categorias[0]++;
    } else if (nota < 6) {
      categorias[1]++;
    } else if (nota < 7) {
      categorias[2]++;
    } else if (nota < 9) {
      categorias[3]++;
    } else {
      categorias[4]++;
    }
  }

  console.log(`Notas válidas: ${validas} · no válidas: ${invalidas}`);
  console.log(`Media: ${(suma / validas).toFixed(2)}`);
  console.log(`Máxima: ${maxima} · Mínima: ${minima}`);
  console.log(`Aprobados: ${aprobados} · Suspensos: ${validas - aprobados}`);
  console.log(`Insuficiente: ${categorias[0]} · Suficiente: ${categorias[1]} · Bien: ${categorias[2]} · Notable: ${categorias[3]} · Sobresaliente: ${categorias[4]}`);

  let posicion = -1;
  for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    if (typeof nota === "number" && nota >= 9 && nota <= 10) {
      posicion = i;
      break; // no hace falta seguir buscando
    }
  }

  console.log(
    posicion === -1
      ? "Nadie tiene sobresaliente"
      : `Primer sobresaliente: ${notas[posicion]} (posición ${posicion})`,
  );
}
/*
  SALIDA:
    Notas válidas: 7 · no válidas: 3
    Media: 6.43
    Máxima: 10 · Mínima: 3
    Aprobados: 5 · Suspensos: 2
    Insuficiente: 2 · Suficiente: 1 · Bien: 1 · Notable: 1 · Sobresaliente: 2
    Primer sobresaliente: 9.5 (posición 3)

  PUNTOS CLAVE
    - "8" no es válida aunque parezca un número: typeof "8" es "string".
      Si el alumno usa Number(nota), la aceptará. No es un error si lo
      justifica, pero cambian los resultados esperados.
    - Máximo y mínimo. Se inicializan con -Infinity e Infinity para que
      cualquier nota válida los sustituya. Una alternativa es
      inicializarlos con la primera nota válida.
    - La trampa del 11. El error típico es buscar solo nota >= 9: en ese
      caso encuentra el 11 en la posición 2. La condición debe repetir
      la validación.
    - Para qué sirve cada bucle. for...of basta cuando solo importan los
      valores; el for clásico hace falta cuando se necesita la posición.

  QUÉ REVISAR (RA02 h): pedir que pongan un breakpoint dentro del bucle
  y comprueben en qué vueltas se ejecuta continue.
*/

// ============================================================
// EJERCICIO 4 · Cifrado César (navegador)
// ============================================================
console.log("\n--- Ejercicio 4 ---");
if (!enNavegador) {
  console.log("(usa prompt/alert: ejecútalo en el navegador)");
} else {
  const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let texto;
  do {
    texto = prompt("Texto a cifrar:");
  } while (texto === null || texto.trim() === "");

  let desplazamiento;
  do {
    desplazamiento = Number(prompt("Desplazamiento (entero, puede ser negativo):"));
  } while (!Number.isInteger(desplazamiento));

  let resultado = "";
  for (const caracter of texto.toUpperCase()) {
    const posicion = ALFABETO.indexOf(caracter);

    if (posicion === -1) {
      resultado += caracter; // espacios, números, Ñ, tildes… se copian tal cual
      continue;
    }

    // El doble módulo corrige los desplazamientos negativos
    const nueva = ((posicion + desplazamiento) % ALFABETO.length + ALFABETO.length) % ALFABETO.length;
    resultado += ALFABETO[nueva];
  }

  alert(`Original: ${texto}\nCifrado:  ${resultado}`);
}
/*
  PRUEBAS REALIZADAS

  Texto        Desplazamiento   Resultado
  ----------   --------------   ------------------------------------------
  Hola Mundo   3                KROD PXQGR
  KROD PXQGR   -3               HOLA MUNDO
  Hola         29               KROD
  Año 2026     1                BÑP 2026 (la Ñ y los números se conservan)

  RESPUESTAS A LAS DECISIONES
    - Vuelta al principio. El operador % hace que la posición "dé la
      vuelta": (25 + 3) % 26 vale 2, así que la Z se convierte en C.
      También resuelve los desplazamientos mayores que 26: 29 equivale
      a 3.
    - Desplazamientos negativos. En JavaScript, el resto conserva el
      signo del dividendo: (0 - 3) % 26 vale -3, que no es una posición
      válida. Sumar 26 y volver a aplicar % 26 da 23, es decir, la X.
    - Descifrar. Desplazar +3 y después −3 devuelve cada letra a su
      posición original.

  NOTAS PARA EL PROFESOR
    - La validación del texto no deja salir con Cancelar: null repite la
      pregunta. Puede pedirse como mejora que Cancelar termine el
      programa.
    - Otra forma válida de resolverlo es usar un array con las letras en
      lugar de un string. indexOf y el acceso por índice funcionan igual
      en ambos.
    - Ampliación. Con la Ñ, el alfabeto queda
      "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ" y el código funciona sin más cambios,
      porque usa ALFABETO.length. Para conservar las minúsculas, hay que
      comparar cada carácter con su versión en mayúsculas y convertir el
      resultado de vuelta.
*/
