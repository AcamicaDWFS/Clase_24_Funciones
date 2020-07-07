const PI = 3.1416;


(function calcularDiametro(){
    let radio;
    let diametro;
    let area

    radio = prompt("Ingrese el radio del circulo: ");
    console.info(radio);
    
    try{
        if(isNaN(radio)){
            throw new Error("El valor ingresado no es un número");
        }
        else {
            diametro = parseFloat(radio) * 2;
            area = PI * (parseFloat(radio) * parseFloat(radio));
            console.info(diametro);
            console.info(PI);
            console.info(area);
            alert("El diámetro del circulo es: " + diametro);
            alert("El área del circulo es: " + area );
        }
    }catch (error) {
        alert(error);
    }
})();