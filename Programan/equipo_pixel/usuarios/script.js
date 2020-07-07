class User {
  constructor(name, lastName, email, username, password, active) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password = password;
    this.active = active;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getLastName() {
    return this.lastName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }

  getUsername() {
    return this.username;
  }

  setUsername(username) {
    this.username = username;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password) {
    this.password = password;
  }

  getActive() {
    return this.active;
  }

  setActive(active) {
    this.active = active;
  }
}

function login() {
  const inputUser = prompt("Ingresa el nombre de usuario:");
  const inputPassword = prompt("Ingresa tu contraseña");

  const result = users.filter(
    (currentUser) => currentUser.getUsername() === inputUser
  );

  if (result.length === 0) {
    alert("El usuario no existe.");
    return;
  } else {
    const loginUser = result[0];
    if (!loginUser.active) {
      alert("Usuario inactivo.");
      return;
    } else {
      const { username, password } = loginUser;

      if (inputUser === username && inputPassword === password) {
        alert("Haz iniciado sesión.");
      } else {
        alert("Datos incorrectos.");
      }
    }
  }
}

function addUser() {
  let newUser = new User();

  newUser.setName(prompt("Ingresa tu nombre:"));
  newUser.setLastName(prompt("Ingresa tu apellido:"));
  newUser.setEmail(prompt("Ingresa tu email:"));
  newUser.setUsername(prompt("Ingresa tu username:"));
  newUser.setPassword(prompt("Ingresa una tu contraseña de usuario:"));
  newUser.setActive(true);

  // Manejo de errores
  try {
    //throw new Error si username vacío
    if (!newUser.getUsername()) {
      throw new Error("Información incompleta, no se ingresó un username");
    }
    //throw new Error si username repetido
    for (let i = 0; i < users.length; i++) {
      if (newUser.getUsername() === users[i].getUsername()) {
        throw new Error("Usuario ya existente");
      }
    }
    //agregar usuario nuevo al array
    users.push(newUser);
    alert(`Bienvenido ${newUser.getUsername()}!`);
    //observar que si no hay error se agrega al array
    console.log(users);
  } catch (error) {
    alert(error);
    //observar que si hay un error no se agrega
    console.log(users);
  }
}

function modifyUser() {
  const userToModify = prompt("Ingresa el username del usuario a modificar:");

  const position = users
    .map((currentUser) => {
      return currentUser.username;
    })
    .indexOf(userToModify);

  try {
    if (position === -1) {
      throw new Error("El usuario no existe.");
    }

    const modifiedUser = users[position];

    modifiedUser.setName(prompt("Ingresa el nuevo nombre:"));
    modifiedUser.setLastName(prompt("Ingresa el nuevo apellido:"));
    modifiedUser.setEmail(prompt("Ingresa el nuevo email:"));
    modifiedUser.setUsername(prompt("Ingresa el nuevo username:"));
    modifiedUser.setPassword(prompt("Ingresa la nueva contraseña:"));
  } catch (error) {
    alert(error);
  }
}

function showMenu() {
  let choice;

  do {
    choice = parseInt(
      prompt(
        "¿Qué deseas realizar?\n" +
          "1. Iniciar sesión.\n" +
          "2. Registrar un nuevo usuario.\n" +
          "3. Modificar datos de un usuario.\n" +
          "4. Salir."
      )
    );

    try {
      if (isNaN(choice)) {
        throw new Error(warningMsg);
      }

      switch (choice) {
        case 1:
          login();
          break;
        case 2:
          addUser();
          break;
        case 3:
          modifyUser();
          break;
        case 4:
          break;
        default:
          throw new Error(invalidInputMsg);
      }
    } catch (error) {
      alert(error);
    }
  } while (choice != 4);
}

const users = [];

// Se ingresan tres usuarios de prueba al arreglo.
users.push(
  new User(
    "Emmanuel",
    "Hernández",
    "ehl@gmail.com",
    "justanindieguy",
    "pass123",
    true
  )
);

users.push(
  new User("Juan", "Lopez", "juan@gmail.com", "Juan11", "pass123", true)
);

users.push(
  new User(
    "Estefania",
    "Cervantes",
    "celara91@gmail.com",
    "celara91",
    "12345",
    false
  )
);

// Mensajes de advertencia.
const warningMsg = "Sólo se aceptan carácteres numéricos.";
const invalidInputMsg = "La opción elegida no existe.";
const invalidUser = "Este usuario ya existe. Escribe uno diferente.";

// Inicio del programa.
showMenu();
