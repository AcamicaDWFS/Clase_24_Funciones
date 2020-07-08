function start() {
  let number = getInput();

  if (number > 10) {
    getInput() > 100 ? console.log("A") : console.log("B");
  } else {
    getInput() > 1000 ? console.log("C") : console.log("D");
  }

  console.log(number);
}

function getInput() {
  let validInput = true;

  do {
    let input = prompt("Ingrese un número:");
    input = parseInt(input);

    if (isNaN(input)) {
      alert("Debes ingresar un número.");
      validInput = false;
    } else {
      return input;
    }
  } while (!validInput);
}

start();
