const getAverage = (array) => {
  const numbers = array.filter((element) => typeof element === "number");
  const sum = numbers.reduce((acc, currVal) => acc + currVal);

  return sum / numbers.length;
};

let myArray = [1, 2, 3, "a", 4, "s", 5, 6, 7, 8, true, 9, 10];

console.log(
  `El promedio de los elementos numéricos es: ${getAverage(myArray)}`
);
