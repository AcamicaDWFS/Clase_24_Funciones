function start() {
  let number = getInput();

  if (number > 10) {
    if (getInput() > 100) {
      console.log("A");
    } else {
      console.log("B");
    }
  } else {
    if (getInput() > 1000) {
      console.log("C");
    } else {
      console.log("D");
    }
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
