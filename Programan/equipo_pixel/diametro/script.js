function getInput() {
  let validInput = true;

  do {
    let input = prompt("Introduce el radio del círculo:");
    input = parseFloat(input);

    if (isNaN(input)) {
      alert("Sólo se aceptan números.");
      validInput = false;
    } else {
      return input;
    }
  } while (!validInput);
}

function getDiameter(radius) {
  return 2 * radius;
}

function getArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

const radius = getInput();
const diameter = getDiameter(radius);
const area = getArea(radius);

console.log(`Diámetro: ${diameter}`);
console.log(`Área: ${area.toFixed(2)}`);
