//Escribe una función normal que reciba como parámetro un array y 
//calcule el promedio de los elementos tipo numérico.
function promedio (inputArray) {
    let inputArrayLength = inputArray.length;
    let almacenNumbers = [];
    for (let index = 0; index < inputArrayLength; index+=1 ) {
        
        if (typeof(inputArray[index]) === "number") {
            almacenNumbers.push(inputArray[index]);
        }
    }
    console.log("Almacén Numbers: " + almacenNumbers);
    let sum = 0;
    let almacenNumbersLenght = almacenNumbers.length;
    for (let index = 0; index < almacenNumbersLenght; index+=1) {
        sum += almacenNumbers[index];        
    }
    let prom = sum / almacenNumbersLenght;
    return prom;
}

console.log ("Promedio con una función normal: " + promedio(["a", "b", 2, "3", 4, 6, 8, 10]));

//Escribe una función arrow que reciba como parámetro un array y 
//calcule el promedio de los elementos tipo numérico.
let average = inputArray => {
    let inputArrayLength = inputArray.length;
    let almacenNumbers = [];
    for (let index = 0; index < inputArrayLength; index+=1 ) {
        
        if (typeof(inputArray[index]) === "number") {
            almacenNumbers.push(inputArray[index]);
        }
    }
    console.log("Almacén Numbers: " + almacenNumbers);
    let sum = 0;
    let almacenNumbersLenght = almacenNumbers.length;
    for (let index = 0; index < almacenNumbersLenght; index+=1) {
        sum += almacenNumbers[index];        
    }
    let prom = sum / almacenNumbersLenght;
    return prom;
}

console.log("Promedio con una función arrow: " + average(["a", "b", 2, "3", 4, 6, 8, 10]));