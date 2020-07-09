function area() {
    let condition = true
    const pi = Math.PI;
    do {
        let numero = prompt("Ingresa radio o cero para salir: ")
        //console.log("numero string: "+ typeof numero)
        numero = Number(numero)
        console.log("numero: "+ numero)
        if( numero > 0 && typeof(numero) === "number"){
            let area = Math.pow(numero, 2) * pi;
            let diametro = numero * 2;
            console.log("diametro " + diametro, "area: " + area)
            alert(`Diametro: ${diametro}, Area: ${area}`);
            condition = true;
        }else{
            condition = false
        }
    }while(condition == false)
}