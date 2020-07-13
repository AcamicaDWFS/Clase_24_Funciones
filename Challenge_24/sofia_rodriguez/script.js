

function suma_2 (){
    var resultado = 0;
    for (var contador = 0; contador <5; contador++){
        var numeros = parseInt(prompt("Ingresa un numero"));
        resultado = resultado + numeros;
    }
    alert("La suma es " + resultado);
    alert("El promedio es " + resultado/5);
}

let numeros = new Array(1, 2, 3, 4, 5, 6, 7);
function suma_3(numeros) {
    let suma_numeros = 0;
    numeros.forEach(function(numero) {
        suma_numeros = suma_numeros + numero;
        console.log(suma_numeros);
    });
    let promedio = suma_numeros / numeros.length;
    console.log(promedio);   
}

let promedio = numeros => {
    let suma_numeros = 0;
    numeros.forEach(function(numero) {
        suma_numeros = suma_numeros + numero;
    });
    let promedio = suma_numeros / numeros.length;
    console.log(promedio);
    return promedio;
}
