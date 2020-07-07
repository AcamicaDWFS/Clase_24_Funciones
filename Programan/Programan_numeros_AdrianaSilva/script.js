(function validarNumero(){
    var continuar = true;
    var numero;

    numero = prompt("Ingrese un número: ");
    
    try{
        if(isNaN(numero)){
            throw new Error("El valor ingresado no es un número");
        }
        else if( parseInt(numero) < 10 ) {
            nuevoNumero = prompt("Ingrese otro número: ");
            
            if(isNaN(nuevoNumero)){
                throw new Error("El valor ingresado no es un número");
            }
            else if( parseInt(nuevoNumero) > 1000 ) {
                console.log("D");
                console.info("Tu numero: ", nuevoNumero);
            }
            else {
                console.log("C");
                console.info("Tu numero: ", numero);
            }
        }
        else if( parseInt(numero) > 10 ) {
            nuevoNumero = prompt("Ingrese un nuevo número: ");
            
            if(isNaN(nuevoNumero)){
                throw new Error("El valor ingresado no es un número");
            }
            else if( parseInt(nuevoNumero) > 100 ) {
                console.log("A");
                console.info("Tu numero: ", nuevoNumero);
            }
            else {
                console.log("B");
                console.info("Tu numero: ", numero);
            }
        }
    }catch (error) {
        alert(error);
    }
})();