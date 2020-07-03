// 4 tipos de función realizando lo mismo
function double(x) {
    return 2 * x;
}

console.log("double: ", double(4));

let double2 = function double3(x) {
    return 2 * x;
};

console.log("double2: ", double2(2));
//console.log("double3: ", double3(5));

let double4 = function (x) {
    return 2 * x;
};

console.log("double4: ", double4(3));

let double5 = (x) => 2 * x;

console.log("double5:", double5(2));

// La función se ejecuta automáticamente
let double6 = (function (x) {
    return 2 * x;
})(10);

// El valor de la función anterior se almacena en 
// la variable double6
console.log("Double6: ", double6);
// Así marca error 
// console.log("Double6: ", double6(11));

// try / catch
const secretNum = 25;
let guess = 3;
let win = 0;

// Para jugarlo comentar la linea "let guess = 3;" y la última línea del código 
// y descomentar el siguiente comentario
/*do{
    let guess = prompt("Adivine el número");
    guessTheNum(secretNum, guess);
}while( win === 0);*/

function guessTheNum(secret, guess) {
    try {
        if (isNaN(+guess)) {
            throw new Error("No fue un número lo que se ingresó");
        } else if (guess == '') {
            throw new Error("No se ingresó un número");
        } else if (+guess > secret) {
            throw new Error("El número ingresado es muy alto");
        } else if (+guess < secret) {
            throw new Error("El número ingresado es muy bajo");
        }
        win = 1;
        alert("Correcto, el número era: " + secret);
    } catch (error) {
        console.error(error);
    }
}
guessTheNum(secretNum, guess);


// Scope Ejemplo 1
let scope = "Soy global";

function testScope() {
    let scope = "Soy local";
    console.log("Adentro de la función: " + scope);
}

testScope();

console.log("Afuera de la función: " + scope);

// Scope Ejemplo 2
let scope2 = "Soy global";

function testScope2() {
    scope2 = "Soy local";

    console.log("Adentro de la segunda función: " + scope2);
}

console.log("Afuera de la segunda función: " + scope2);

testScope2();

// Scope ejemplo 3 
// Hosting declaración scope 3, da error - descomentar para mostrar ejemplo
// let scope3 = "Soy global";

// function testScope3() {
//     console.log ("Adentro de la tercera función: " + scope3);     
//     let scope3 = "Soy local";
// }

// testScope3(); 

// console.log("Afuera de la tercera función: " + scope3);
// Se reasigna el valor de scope2 tras ejecutar la función
console.log("Afuera de la segunda función: " + scope2);


// Hoisting en funciones
function sayHi(name) {
    console.log("Hola " + name);
}
sayHi("Pedro");


sayHi2("Pepe");
function sayHi2(name) {
    console.log("Hola " + name);
}


// Dudas de getters y setters
class Car {

    #defprivateProperty;    // Con # marcamos la propiedad como privada
    #otherPrivateProperty;  // no se puede acceder directamente a esta propiedad

    constructor(color, make, year, engine) {
        this.defcolor = color;
        this.defmake = make;
        this.year = year;
        this.engine = engine;
    }

    /* Accessor properties (getters) */

    // Getters con la palabra get
    // Definir el getter con la palabra get
    // la propiedad de la clase no puede tener
    // el mismo nombre que el getter
    get color() {
        return this.defcolor;
    }

    get make() {
        return this.defmake;
    }

    get privateProperty() {
        return this.#defprivateProperty;
    }

    // Getter sin la palabra get
    getYear() {
        return this.year;
    }

    getEngine() {
        return this.engine;
    }

    getOtherPrivateProperty() {
        return this.#otherPrivateProperty;
    }
    /* Accessor properties (setters) */

    // Setters con la palabra set
    // Definir el setter con la palabra set
    // la propiedad de la clase no puede tener
    // el mismo nombre que el setter
    set color(newColor) {
        this.defcolor = newColor;
    }

    set make(newMake) {
        this.defmake = newMake;
    }

    set privateProperty(privateProperty) {
        this.#defprivateProperty = privateProperty;
    }

    // Setter sin la palabras set
    setYear(year) {
        this.year = year;
    }

    setEngine(engine) {
        this.engine = engine;
    }

    setOtherPrivateProperty(otherPrivateProperty) {
        this.#otherPrivateProperty = otherPrivateProperty;
    }
}

let myCar = new Car("Blue", "Toyota", 2000, "v1");
console.table(myCar);

// Uso de getters y setters definidos con las palabras
// reservadas get y set
myCar.color = "Red";
myCar.make = "Nissan";
console.info("Color: ", myCar.color);
console.info("Make: ", myCar.make);
console.table(myCar);

// Uso de getters y setters definidos sin las palabras
// reservadas get y set
console.info("Engine: ", myCar.getEngine());
console.info("Make: ", myCar.getYear());
myCar.setEngine("v2");
myCar.setYear(2020);
console.table(myCar);

// Las siguientes 2 líneas marcan error, quitar los comentarios para ver los errores
//myCar.#defprivateProperty = 1;
//console.log("Propiedad privada: ", myCar.#defprivateProperty);

// Uso de setters
myCar.privateProperty = 1;
myCar.setOtherPrivateProperty(2);
console.table(myCar);

// Uso de getters
console.log("PrivateProperty: ", myCar.privateProperty);
console.log("OtherPrivateProperty: ", myCar.getOtherPrivateProperty());

// Función arrow para determinar si un número es mayor que, menor que, igual que CERO
let menorMayorIgual = x => x > 0 ? "x es > 0" : x < 0 ? "x es < 0" : "x es igual 0";
console.log(menorMayorIgual(-1));

// La pregunta: Definir funciones dentro de otras funciones
// Podemos definir funciones dentro de funciones pero no podemos
// usarlas fuera de la función en la que fue creada, lo mejor es
// definir las funciones afuera
/* const promedio = arr => {
    const total = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });

    alert(`La suma del array es: ${total}`);
    alert(`El array contiene ${arr.length} elementos`);

    return total / arr.length;
}; */

// Marca error
//console.log(total);

// Refactor del código anterior
let arrayNum = [1, 2, 3, 4, 5, 2];

const sumarElementos = arr => arr.reduce((accumulator, currentValue) => accumulator + currentValue);
const average = arr => sumarElementos(arr) / arr.length;

console.log(`El promedio del array es: ${average(arrayNum)}`);

