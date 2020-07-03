let arregloNumeros = [34, "ad", 12, 24, 65, 7, "a", "prueba", "hola", "mundo", 242, 54 ];
let suma=0;

let promedio = (arregloNumeros) => {
    var i=0;
    
    while (i < arregloNumeros.length) {
        if ( isNaN(arregloNumeros[i]) ) {
            console.log("Valor no numérico: " + arregloNumeros[i]);
        }
        else {
            suma += arregloNumeros[i];
        }
        i++;
    }
    return console.log(suma/i);
}

promedio(arregloNumeros); 