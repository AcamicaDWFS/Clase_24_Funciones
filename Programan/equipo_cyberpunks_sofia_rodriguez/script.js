function diametro_circulo() {
    const pi = Math.PI;
    let radio = prompt("Ingresa el radio de un circulo");
    let diametro = +radio * 2;
    let circunferencia = pi * diametro;
    alert(`El diametro del circulo es ${diametro}`);
    alert(`Y su circunferencia es ${circunferencia}`);
}

function una_variable() {
    let numero = prompt("Ingrese un número");

    if (+numero > 10) {
        if (+prompt("Ingrese un numero") > 100) {
            alert("A");
        } else {
            alert("B");
        }
    } else {
        if (+prompt("Ingrese un número") > 1000 ) {
            alert("C");
        } else {
            alert("D");
        }
    }
    alert(numero);
}


class Username_objeto {
    constructor(nombre, apellido, email, username, contrasena, active) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.username = username;
        this.contrasena = contrasena;
        this.active = active;
    }

}

let usuario = new Username_objeto('Juan', 'Perez', 'juanperez@gmail.com', 'juanp', '1234', true);
let usuario1 = new Username_objeto('Maria', 'Lopez', 'marialopez@gmail.com', 'mariap', '5678', true);
let usuario2 = new Username_objeto('Paco', 'Gomez', 'pacogomez@gmail.com', 'pacog', 'password', true);
let usuario3 = new Username_objeto('Ana', 'Martinez', 'anamartinez@gmail.com', 'anam', 'perritos123', true);

let usuarios = new Array ();
usuarios.push(usuario);
usuarios.push(usuario1);
usuarios.push(usuario2);
usuarios.push(usuario3);

function agregar_usuario() {
    let nuevo_username = prompt('Ingresa tu nombre de usuario');
    if (validar_usuario(nuevo_username) === true) {
        alert('Este usuario ya existe, por favor escoje otro');
    } else {       
        alert('Bienvenido a la pagina!');

        alert('Por favor agrega la siguiente información');

        let nuevo_usuario_objeto = new Username_objeto( prompt('Ingresa tu nombre'), prompt('Ingresa tu apellido'), 
        prompt('Ingresa tu correo electronico'), nuevo_username, prompt('Ingresa tu contraseña'),true);
        usuarios.push(nuevo_usuario_objeto);
    }

    console.table(usuarios);
}

function validar_usuario(nuevo_username) {
    for (let i=0; i < usuarios.length; i++) {
        if (usuarios[i].username === nuevo_username) {
            return true;
        }
    } 
    return false;
}



let usuarioModificar;
function modificar_usuario() {
        let nuevo_username = prompt('Ingresa tu nombre de usuario');
        if (validar_usuario(nuevo_username) === true) {
            alert('Por favor ingresa la información que quieres modificar.');
            usuarioModificar.nombre = prompt('Ingresa tu nuevo nombre'); 
            usuarioModificar.apellidos = prompt('Ingresa tu nuevo apellido');
            usuarioModificar.email = prompt('Ingresa tu nuevo email');
            usuarioModificar.username = prompt('Ingresa tu nuevo username');
            usuarioModificar.contrasena = prompt('Ingresa tu nueva contraseña');

        } else {       
            alert('Este nombre de usuario no existe, por favor intenta de nuevo');
    
        }
    
        console.table(usuarios);
    }
    
    function validar_usuario(nuevo_username) {
        for (let i=0; i < usuarios.length; i++) {
            if (usuarios[i].username === nuevo_username) {
                usuarioModificar = usuarios[i];
                return true;
            }
        } 
        return false;
    }
