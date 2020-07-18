/* Escribe una función arrow que reciba como parámetro un array y calcule el 
promedio de los elementos tipo numérico. */


let arrayNum = [1,2,3,4,5,2];

const promedio = arr => {
    const total = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });

    alert(`La suma del array es: ${total}`);
    alert(`El array contiene ${arr.length} elementos`);

    return total / arr.length;
};

alert(`El promedio del array es: ${promedio(arrayNum)}`);