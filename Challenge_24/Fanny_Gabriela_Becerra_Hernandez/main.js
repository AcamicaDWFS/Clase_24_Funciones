let array = [];

function calculateAverage() {
    let inputValue = prompt('Ingrese un número.');
    let inputNum = parseInt(inputValue);
    if (!isNaN(inputNum)) {
        array.push(inputNum);
        let selectAnother = prompt('Si desea agregar otro número, ingrese 1.');
        if (selectAnother == 1) {
            calculateAverage();
        } else {
            let average = array.reduce((a, b) => a + b, 0) / array.length;
            alert('El promedio es: ' + average);
        }
    } else if (userInput != null) {
        alert("Ingresaste un valor no válido.");
        calculateAverage();
    }
}