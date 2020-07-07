class Usuario {
    constructor(nombre , apellido , email , usuario , contrasena , status) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.status = status;
    }
}

let newUsers = [];
let confirmacion = true;
let requiereModificar = true;
let index = -1;
let encontrado = true;

llenarArray();

while (confirmacion === true) {
    confirmacion = confirm("Desea capturar un usuario");
    
    if(confirmacion === false) {
        break;
    }
    capturarUsurios()
} 

while (requiereModificar === true) {
    requiereModificar = confirm("Desea modificar un usuario?");
    
    if(requiereModificar === false) {
        break;
    }

    var userFind = prompt("Ingrese el nombre de usuario a buscar: ");
    index = buscarUsuario(userFind);

    if (index != -1) {
        modificarUsuario(index);
        console.table(newUsers);

    } else {
        alert("El usuario capturado no existe");
    }
} 





function capturarUsurios(){
    (function addUser(){
        //input usuario 
        let newUsername = prompt("Ingrese un nuevo nombre de usuario");
        let password = prompt("Ingrese su contraseña");
        let name = prompt("Ingrese su nombre");
        let lastName = prompt("Ingrese su apellido");
        let mail = prompt("Ingrese su mail");
        let status = prompt("Ingrese el número que indique su estatus: \n1.true \n2.false");
        
        //manejo de errores
        try{
            //throw new Error si username vacío
            if (newUsers.length == 0) {
                throw new Error("No hay usuarios nuevos");
            }
            else {
                if(!newUsername){
                    throw new Error("Información incompleta, no se ingresó un username");
                } 
                //throw new Error si username repetido
                for(let i = 0; i < newUsers.length; i++){
                    if(newUsername === newUsers[i].usuario && newUsers[i].status === true){
                        throw new Error("Usuario ya existente");
                    }
                }

                var statusBoolean;

                if (status === "1" || status === "2" ) {
                    statusBoolean = parseInt(status) === 1 ? true : false;
                    console.log(statusBoolean); 
                    //agregar usuario nuevo al array
                    var usuario = new Usuario(name, lastName, mail, newUsername, password, statusBoolean);
                    newUsers.push(usuario);
                    alert(`Bienvenido ${newUsername}!`);
                    //observar que si no hay error se agrega al array
                    console.table(newUsers);   
                }
                else {
                    throw new Error("Opción no válida");
                }
            }        
        } catch (error){
            alert(error);
            //observar que si hay un error no se agrega
            console.log(newUsers);
        }
    })();
}


function llenarArray(){
    var usuario = new Usuario("Juan", "Perez", "prubea@prueba.com", "pepito123", "pepito123", false);
    newUsers.push(usuario);
    var usuario = new Usuario("Maria", "Lopez", "maria@prueba.com", "yram242", "admin123", true);
    newUsers.push(usuario);
    console.table(newUsers);
}

/*
let modificarUsuario = (userToFind) => {
    console.info(userToFind);
}*/


function buscarUsuario (userToFind){
    //index = newUsers.name.indexOf("userToFind");

    console.info(userToFind);

    var posicion=-1;

    for (i=0; i < newUsers.length; i++){
        console.info(newUsers[i].usuario);
        if( newUsers[i].usuario === userToFind){
            posicion = i;
            break;
        }
    }
    return posicion;
}

function modificarUsuario (index){
    newUsers[index].usuario = prompt("Ingrese un nuevo nombre de usuario");
    newUsers[index].contrasena = prompt("Ingrese su contraseña");
    newUsers[index].nombre = prompt("Ingrese su nombre");
    newUsers[index].apellido = prompt("Ingrese su apellido");
    newUsers[index].mail = prompt("Ingrese su mail");
    newUsers[index].status = prompt("Ingrese el número que indique su estatus: \n1.true \n2.false");
}

