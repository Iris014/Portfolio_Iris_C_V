console.log("Conexion con JS..")

// Variables a lista
let nombre1 = "Ana";
let nombre2 = "Pedro";
let nombre3 = "María";
let nombre4 = "Carlos";

// Transformar en array y mostrar
let nombres = ["Ana", "Pedro", "María", "Carlos"]

// Mostrar a Maria en una alerta
alert(nombres[1]); // Muestra Maria

let compras = [5000, 2300, 12000, 4500, 3000];
let alumnos = ["Ana", "Pedro", "María", "José"];
let datos = ["Carlos", 18, true];
let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];

// Desafío formar una oración con elementos
// de las distintas variables
// Pedro tiene 18 años, y compró una sandía a $2300
let mensaje = `${alumnos[1]} tiene ${datos[2]} años, y compró una ${frutas[4]} a ${compras[2]}`;
alert(mensaje);

// La propiedad .length devuelve la cantidad de las variables

let frutas2 = ["Manzana", "Pera", "Kiwi", "Sandía"];

console.log(frutas2.length); // 4 --> Conteo de elementos

// Obtener el último elemento
let frutas3 = ["Manzana", "Pera", "Kiwi", "Sandía"];

let ultima = frutas3[frutas3.length - 1];
// variable.length: -1 siempre trae el último elemnto

console.log(ultima)


// Desafío 
// Del arreglo ("Hola", "a", "todos", "loa", "programadores!")
// Mostrar el penúltimo elemento y el último concatenado

let elementos = ["Hola", "a", "todos", "los", "programadores!"]
console.log(elementos[elementos.length - 2] + elementos[elementos.length - 1])

let listaTareas = ["Barrer", "Cocinar", "Realizar compras"];
function manipularArreglo(listaTareas) {
    // Modificar un elemnto del arreglo
    listaTareas[1] = "Contruir";
    // Añadir un elemento al final de la lista
    listaTareas.push("Cocinar"); // Agrega un elemento al final .push()
    // Eliminar el último elemento y mostrarlo
    let eliminado = listaTareas.pop(); // Elimina último .pop()
    // Añadir un elemnto al inicio de la lista
    listaTareas.unshift("Boxear"); // Eliminar primero .unshift()
    // Eliminar el primer elemento de la lista
    eliminado += " - " + listaTareas.shift(); // .shift elimina el primero
    // Mostrar resultado
    alert(listaTareas.join[" - "]);
    alert("Elemntos eliminados: " + eliminado);
}


// Recorrer un arreglo
function recorrerArreglo() {
    let notas = [6.2, 5.8, 4.1, 7.0];

    for (let i = 0; i < notas.length; i++) {

        alert(`Mostrando nota ${i + 1} de ${notas.length}: ${notas[i]}`);

    }

}

// Sumar elementos dentro de un bucle
function sumarElementos() {
    let ventas = [10000, 5000, 12000, 8000];
    let total = 0;
    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i]; // += acumula
    }
    alert(`El resultado final es: ${total}`);
}

// Calcular un prommedio 
function calcularPromedio() {
    let notas = [5.8, 6.2, 4.9, 6.5];
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    alert(`La suma acumulada es: ${suma}`)
    let promedio = suma / notas.length;
    alert(`El promedio de las notas: ${notas.join(" - ")} 
    \nPromedio: ${promedio}`);
}

// Condiciones dentro de un bucle
function buscarMayoresEdad() {
    let edades = [12, 15, 18, 20, 25, 35, 50, 5];
    let mayores = [];
    for (let i = 0; i < edades.length; i++) {
        // condición para buscar mayores de 18
        if (edades[i] >= 18) {
            mayores.push(edades[i]); // Añade la posición que cumple la condición
        }
    }
    alert(`De la lista de edades: ${edades.join(" / ")}
    \nLos mayores son: ${mayores.join(" / ")}`)
}

// Encontrar el menor y mayor valor
function bucarMayorMenor() {
    let numeros = [10, 35, 7, 90, 22, 90, 2];
    let menor = numeros[0];
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        } else if (numeros[i] > mayor) {
            mayor = numeros[i];
        } else {
            console.log(`Valor que no afecta: ${numeros[i]}`)
        }
    }
    alert(`De los números ${numeros.join(" / ")}
    El menor es: ${menor}
    El mayor es ${mayor}`);
}

// Ejemplo completo 
// Tarea: Unir los console.log en una alerta
// Eliminar el último valor y mostrarlo
// Añadir dos valores nuevos con .push (prompt)
function calcularVentas() {
    let ventas = [5000, 8000, 12000, 3000, 10000, 9000, 4000];
    let total = 0;
    let mayores = [];
    let contadorVentas = 0;
    let mayor = ventas[0];
    let valorEliminado = ventas.pop();
    let ventas01 = parseInt(prompt(`Ingrese primer valor: `));
    let ventas02 = parseInt(prompt(`Ingrese segundo valor: `));
    ventas.push(ventas01, ventas02);
    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i];
        if (ventas[i] > mayor) {
            mayor = ventas[i];
            if (ventas[i] >= 10000) {
                mayores.push(ventas[i])
                contadorVentas++;
            }
        }
    }

    alert(`Total ventas: ${total}
Mayor: ${mayor}
Promedio: ${total / ventas.length}
Valores sobre $10.000: ${mayores.join(" / ")}
Conteo de mayores: ${contadorVentas} ventas
Valor Eliminado: ${valorEliminado}`);
}


// 💻 Ejercicios
// Ejercicio 1
// Crear el siguiente arreglo.

// let edades = [15,18,20,14,25];
// Mostrar:

// Primera edad.
// Última edad.
// Cantidad de elementos.
function ejercicio1() {
    let edades2 = [15, 18, 20, 14, 25];
    alert(`Primera edad: ${edades2[0]}`);
    alert(`Última edad: ${edades2[edades2.length - 1]}`);
    alert(`Cantidad de elementos: ${edades2.length}`);
}

// Ejercicio 2
// Crear un arreglo con cinco nombres.

// Mostrar todos utilizando un ciclo for.
function ejercicio2() {
    let nombres2 = ["Sofia", "Dario", "Maria", "Camila", "Mateo"];
    for (let i = 0; i < nombres2.length; i++) {
        alert(`Nombres en ciclo ${i}: ${nombres2[i]}`);
    }
}

// Ejercicio 3
// Crear un arreglo con cinco notas.

// Calcular el promedio.

// Mostrar:

// Promedio: X
function ejercicio3() {
    let notas3 = [6.5, 5.0, 4.2, 7.0, 5.8];
    let suma3 = 0;
    for (let i = 0; i < notas3.length; i++) {
        suma3 += notas3[i];
    }
    let promedio3 = suma3 / notas3.length;
    alert(`Promedio: ${promedio3}`);
}

// Ejercicio 4
// Crear el arreglo.

// [18,20,15,22,19,25,17]
// Mostrar solamente las temperaturas mayores a 20.
function ejercicio4() {
    let temperatura2 = [18, 20, 15, 22, 19, 25, 17];
    let mayor20 = [];
    for (let i = 0; i < temperatura2.length; i++) {
        if (temperatura2[i] > 20) {
            mayor20.push(temperatura2[i]);
        }
    }
    alert(`Temperaturas mayores a 20: ${mayor20.join(", ")}`);
}

// Ejercicio 5
// Crear un arreglo con diez números.

// Contar:

// Cuántos son pares.
// Cuántos son impares.
function ejercicio5() {
    let numeros1 = [12, 7, 22, 14, 3, 9, 30, 15, 8, 11];
    let pares1 = 0;
    let impares1 = 0;
    for (let i = 0; i < numeros1.length; i++) {
        if (numeros1[i] % 2 === 0) {
            pares1++;
        } else {
            impares1++;
        }
    }
    alert(`Pares: ${pares1}
        \nImpares: ${impares1}`);
}

// Ejercicio 6
// Crear el siguiente arreglo.

// [5000,12000,3000,4500,7000]
// Mostrar:

// Venta mayor.
// Venta menor.
// Total vendido.
function ejercicio6() {
    let ventas1 = [5000, 12000, 3000, 4500, 7000];
    let ventaMayor1 = ventas1[0];
    let ventaMenor1 = ventas1[0];
    let totalVenta1 = 0;
    for (let i = 0; i < ventas1.length; i++) {
        totalVenta1 += ventas1[i];
        if (ventas1[i] > ventaMayor1) {
            ventaMayor1 = ventas1[i];
        } else if (ventas1[i] < ventaMenor1) {
            ventaMenor1 = ventas1[i];
        }
    }
    alert(`Venta mayor: ${ventaMayor1}
        \nVenta menor: ${ventaMenor1}
        \nTotal vendido: ${totalVenta1}`);
}

// Ejercicio 7
// Crear el siguiente arreglo.

// ["Ana","Pedro","María","Juan","Camila","Tomás"]
// Mostrar únicamente los nombres con más de cuatro letras.
function ejercicio7() {
    let nombres7 = ["Ana", "Pedro", "María", "Juan", "Camila", "Tomás"];
    let masLetras7 = [];
    for (let i = 0; i < nombres7.length; i++) {
        if (nombres7[i].length > 4) {
            masLetras7.push(nombres7[i]);
        }
    }
    alert(`Nombres con más de 4 letras: ${masLetras7.join(", ")}`);
}

// Ejercicio 8
// Crear un arreglo con ocho números.

// Mostrar únicamente los múltiplos de 3.
function ejercicio8() {
    let numeros8 = [4, 9, 12, 17, 21, 25, 30, 31];
    let multiplos8 = [];
    for (let i = 0; i < numeros8.length; i++) {
        if (numeros8[i] % 3 === 0) {
            multiplos8.push(numeros8[i]);
        }
    }
    alert(`Los múltiplos de 3 son ${multiplos8.join(", ")}`);
}

// Ejercicio 9
// Crear el siguiente arreglo.

// [15,16,17,18,17,16,19,20]
// Calcular:

// Cantidad de mayores de edad.
// Cantidad de menores de edad.
function ejercicio9() {
    let edades9 = [15, 16, 17, 18, 17, 16, 19, 20];
    let mayores9 = 0;
    let menores9 = 0;
    for (let i = 0; i < edades9.length; i++) {
        if (edades9[i] >= 18) {
            mayores9++;
        } else {
            menores9++;
        }
    }
    alert(`Cantidad de mayores de edad: ${mayores9}
        \nCantidad de menores de edad: ${menores9}`);
}

// Ejercicio 10 (Desafío)
// let ventas = [12000,18000,5000,21000,9000,15000,8000];
// Mostrar:

// Total de ventas.
// Promedio.
// Venta mayor.
// Venta menor.
// Cantidad de ventas mayores a $10.000.
// Cantidad de ventas menores o iguales a $10.000.
// Índice donde ocurrió la venta mayor.
// Índice donde ocurrió la venta menor.
function ejercicio10() {
    let ventas10 = [12000, 18000, 5000, 21000, 9000, 15000, 8000];
    let total10 = 0;
    let mayor10 = ventas10[0];
    let menor10 = ventas10[0];
    let indiceMayor10 = 0;
    let indiceMenor10 = 0;
    let ventaMayor10 = 0;
    let ventaMenor10 = 0;
    for (let i = 0; i < ventas10.length; i++) {
        total10 += ventas10[i];
        if (ventas10[i] > 10000) {
            ventaMayor10++;
        } else if (ventas10[i] < 10000) {
            ventaMenor10++;
        }
        if (ventas10[i] > mayor10) {
            mayor10 = ventas10[i];
            indiceMayor10 = i;
        } else if (ventas10[i] < menor10) {
            menor10 = ventas10[i];
            indiceMenor10 = i;
        }
    }
    let promedio10 = total10 / ventas10.length;
    alert(`Total de ventas: $${total10}
        \nPromedio: ${promedio10}
        \nVenta mayor: $${mayor10}
        \nVenta menor: $${menor10}
        \nVentas mayores a $10.000: ${ventaMayor10}
        \nVentas menores o iguales a $10.000: ${ventaMenor10}
        \nMayor indice: ${indiceMayor10}
        \nMenor indice: ${indiceMenor10}`);
}


// 🚀 Desafío Final
// Una empresa registra las ventas de sus vendedores.

// let vendedores = ["Ana","Pedro","María","José","Camila"];

// let ventas = [350000,510000,420000,610000,480000];
// Desarrolla un programa que permita:

// Mostrar cada vendedor con su venta.
// Calcular el total vendido.
// Calcular el promedio.
// Mostrar el mejor vendedor.
// Mostrar el vendedor con menor venta.
// Mostrar los vendedores que vendieron más de $450.000.
// Contar cuántos vendedores superaron el promedio.
// Indicar si la empresa alcanzó una meta de $2.300.000.
// ⭐ Desafío Extra
// Permite que el usuario agregue nuevas ventas utilizando:

// push()
// pop()
// shift()
// unshift()
// y vuelve a calcular todas las estadísticas automáticamente.