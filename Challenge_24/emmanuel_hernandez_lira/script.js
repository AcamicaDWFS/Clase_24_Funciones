const getAverage = (array) => {
  let sum = 0;
  let numCounter = 0;

  for (let element of array) {
    if (typeof element === "number") {
      sum += element;
      numCounter++;
    }
  }

  return sum / numCounter;
};

let myArray = [1, 2, 3, "a", 4, "s", 5, 6, 7, 8, true, 9, 10];

alert(`El promedio de los elementos numéricos es: ${getAverage(myArray)}`);
