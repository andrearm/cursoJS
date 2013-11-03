/* Crear una función constructor para una clase User que soporte las siguientes propiedades:
	Nombre y apellidos
	Nombre de usuario
	Correo electrónico */

var User = function User(attributes) {
  this.nombre = attributes.nombre;
  this.apellidos = attributes.apellidos;
  this.username = attributes.username;
  this.email = attributes.email;
};

/*
Crear métodos de acceso y asignación (get y set) para las propiedades de la clase User. 
Puntaje adicional si se crea un solo método de acceso y otro de asignación.
*/

User.prototype.setNombre = function(nombre) {
	this.nombre = nombre;
}
User.prototype.getNombre = function() {
	return this.nombre;
}

User.prototype.setApellidos = function(apellidos) {
	this.apellidos = apellidos;
}
User.prototype.getApellidos = function() {
	return this.apellidos;
}

User.prototype.setUsername = function(username) {
	this.username = username;
}
User.prototype.getUsername = function() {
	return this.username;
}

User.prototype.setEmail = function(email) {
  this.email = email;
};

User.prototype.getEmail = function() {
  return this.email;
};

//una sola función

User.prototype.getP = function (attr) { return this[attr] };

usuario.getP('email');
>> "andrearuizmendoza@gmail.com"

User.prototype.setP = function (key, value) { this[key] = value; return this[key] };

usuario.setP('username', 'andrearm10');
>> "andrearm10"

/*
Crear un método “inspect” que liste todas las propiedades.
*/

User.prototype.inspect = function(){
   var keys = [];
   for(var key in this){
      keys.push(key);
   }
   return keys;
}

usuario.inspect();
>> ["nombre", "apellidos", "username", "email", "getProperty", "getP", "setP", "inspect"]

/*
Crear un método “postMessage” que guarde un mensaje en la lista de mensajes y 
devuelva el número de mensajes guardados en la lista. Los mensajes deben ser guardados en una variable privada.
*/
var userModule = (function () {
  var messages = [];
  return {
    postMessage : function(message) {
      messages.push(message);
      return messages.length;
    }
  }
}
)();
>> undefined
userModule.postMessage('mensaje 1');
>> 1
userModule.postMessage('mensaje 2');
>> 2

/*
⦁ Crear un módulo Users que permita:
⦁ Registrar usuarios. Verificar que el objeto a agregar sea una instancia de la clase User.
⦁ Validar si el usuario o correo electrónico ya existe antes de agregar un usuario nuevo.
⦁ Devolver el número de usuarios registrados.
⦁ Devolver una lista con una propiedad por cada usuario 
(ejemplo: Listar todos los correos electrónicos de los usuarios). Se debe poder listar cualquier propiedad definida en el paso 1.
⦁ Crear un método “totalMessages” que devuelva el número total de mensajes de todos los usuarios. 
Debe crear un método auxiliar que devuelva el total de mensajes de cada usuario y otro que sume los totales de mensajes 
de cada usuario usando call o apply.
*/

var UsersModule = (function () {
  var users = [];
  return {
    exists : function(user) {
      if (users.indexOf(user.username) != -1 || users.indexOf(user.email) != -1) {
        return true;
      }
      return false;
    },
    addUser : function(user) {
      if (user instanceOf User && !this.exists(user)) {
        users.push(user);
      }
      return users.length;
    },
    count: function() {
      return users.length;
    },
    getProperty: function(property) {
      var properties = [];
      for (var usr in users) {
        if (usr.hasOwnProperty(property)) {
          properties.push(usr[property]);
        }
      }
      return properties;
    }
  }
}
)();