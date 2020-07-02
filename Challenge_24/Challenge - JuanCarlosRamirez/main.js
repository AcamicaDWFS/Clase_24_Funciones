let numeros = [];
let numerosInput = 0;
do {
    numerosInput = parseInt(
        prompt("Ingresa un número: \n(Ingresa 0 para finalizar)")
    );
    if (isNaN(numerosInput)) {
        alert("Solo se permiten numeros");
    } else {
        numeros.push(numerosInput);
    }
} while (numerosInput != 0);
numeros.pop();

const promedio = (numeros) => {
    const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual); return suma / numeros.length;
};

console.log(`El promedio de los números ingresados es: ${promedio(numeros)}`);

