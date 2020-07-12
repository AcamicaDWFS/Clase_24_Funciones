//Minichallenge función arrow con operador ternario
//Identificar si un número es mayor, menor o es cero.

//Se define primero la variable, seguida por la asignación que sería el parámetro, después la arrow y la condicional..
//Seguida por el signo de interrogación y su primera respuesta, la segunda es otra condicional y las últimas dos opciones

//let mayor_menor = numero => (numero > 0) ? "mayor" : (numero < 0) ? "menor" : "cero";

let mayor_menor = numero => (numero > 0) ? r = "mayor" : (numero < 0) ? r = "menor" : r = "cero";


console.log(mayor_menor(5));
console.log(mayor_menor(0));
console.log(mayor_menor(-5));