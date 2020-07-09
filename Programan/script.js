let users = [{
            nombre: "Pepe",
            apellido: "xxx",
            email: "pepe@xx.com",
            usuario: "pepe",
            password: "123456",
            activo: true
            },
            {
            nombre: "Juan",
            apellido: "yyy",
            email: "juan@xx.com",
            usuario: "juan",
            password: "123456",
            activo: true
            },
            {
            nombre: "Fiora",
            apellido: "yyy",
            email: "juan@xx.com",
            usuario: "fiora",
            password: "123456",
            activo: true
            }, 
            {
            nombre: "Mafalda",
            apellido: "yyy",
            email: "juan@xx.com",
            usuario: "mafalda",
            password: "123456",
            activo: true
            },
            {
            nombre: "Salvador",
            apellido: "yyy",
            email: "juan@xx.com",
            usuario: "salvador",
            password: "123456",
            activo: false
            },
            {
            nombre: "Gaviota",
            apellido: "yyy",
            email: "juan@xx.com",
            usuario: "gaviota",
            password: "123456",
            activo: false
            } 
        ];


function log() {
    const user = prompt('Ingresa usuario');
    const password = prompt('Ingresa password');
    try {
        if(!user || !password) {
            throw new Error("Datos Incompletos");
        }
        logear(user, password);
    } catch (error) {
        alert(error);
    }
}

function logear(usuario,password){
    const found = users.find(element => element.usuario === usuario && element.password === password);
    if(found) {
        if (found.activo === true){
            alert('Bienvenido!!!');
        } else {
            alert('Usuario Inactivo');
        }
    }
    else {
        alert('Usuario no existe');
    }
}

function addUser(){
    //input usuario 
    const newUsername = prompt("Ingrese un nuevo nombre de usuario");
    //manejo de errores
    try{
        //throw new Error si username vacío
        if(!newUsername){
            throw new Error("Información incompleta, no se ingresó un username");
        } 
        //throw new Error si username repetido
        for(let i = 0; i < users.length; i++){
            if(newUsername === users[i].usuario){
                throw new Error("Usuario ya existente");
            }
        }
        const name = prompt('Ingresa Nombre');
        const lastName = prompt('Ingresa Apellido');
        const email = prompt('Ingresa email','yop@yopmail.com');        
        const password = prompt('Ingresa contraseña');

        //agregar usuario nuevo al array
        users.push({
            nombre: name,
            apellido: lastName,
            email,
            usuario: newUsername,
            password,
            activo: true
        });
        alert(`Bienvenido ${newUsername}!`);
        //observar que si no hay error se agrega al array
        console.log(users);
    } catch (error){
        alert(error);
        //observar que si hay un error no se agrega
        console.log(users);
    }
}

function editUser(){
    const user = prompt('Ingresa usuario a modificar');
    try {
        if(!user) {
            throw new Error('Usuario vacío');
        }
        const found = users.find(element => element.usuario === user);
        if(found) {
            const name = prompt('Ingresa Nombre', found.nombre);
            const lastName = prompt('Ingresa Apellido', found.apellido);
            const email = prompt('Ingresa email',found.email);        
            const password = prompt('Ingresa contraseña',found.password);
            if( !name || !lastName || !email || !password ){
                throw new Error('Los datos no pueden estar vacíos');
            }
            found.nombre = name;
            found.apellido = lastName;
            found.email = email;
            found.password = password;
            console.log(found, users);
        } else {
            throw new Error('Usuario no existe');
        }
    } catch (error) {
        alert(error);
    }
}