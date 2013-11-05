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

User.prototype.getPropiedad = function(attr) { return this[attr] };

User.prototype.setPropiedad = function(key, value) { this[key] = value; return this[key] };

/*
Crear un método “inspect” que liste todas las propiedades.
*/

User.prototype.inspect = function(){
   var keys = [];
   for(var key in this){
      keys.push(key);
      console.log(key + ':' + this[key]);
   }
   return keys;
}

/*
Crear un método “postMessage” que guarde un mensaje en la lista de mensajes y 
devuelva el número de mensajes guardados en la lista. Los mensajes deben ser guardados en una variable privada.
*/
var User = function User(attributes) {
  this.nombre = attributes.nombre;
  this.apellidos = attributes.apellidos;
  this.username = attributes.username;
  this.email = attributes.email;
  var messages = [];
  this.postMessage = function(message) {
    messages.push(message);
    return messages.length;
  }
  this.countMessages = function() {
    return messages.length;
  }
};

/*
Crear un módulo Users que permita:
⦁ Registrar usuarios. Verificar que el objeto a agregar sea una instancia de la clase User.
⦁ Validar si el usuario o correo electrónico ya existe antes de agregar un usuario nuevo.
⦁ Devolver el número de usuarios registrados.
⦁ Devolver una lista con una propiedad por cada usuario 
(ejemplo: Listar todos los correos electrónicos de los usuarios). Se debe poder listar cualquier propiedad definida en el paso 1.
⦁ Crear un método “totalMessages” que devuelva el número total de mensajes de todos los usuarios. 
Debe crear un método auxiliar que devuelva el total de mensajes de cada usuario y otro que sume los totales de mensajes 
de cada usuario usando call o apply.
*/

var sumaTotal = function() {
  var suma = 0;
  for (var i = 0; i < arguments.length; i++) {
    var usr = arguments[i]; 
    suma = suma + usr.countMessages();
  }
  return suma;
}

var Users = (function () {
  var users = [];
  return {
    exists : function(user) {
      for (var i=0; i < users.length; i++) { 
        var usr = users[i]; 
        if (usr.nombre == user.nombre || usr.username == user.username) { 
          return true; 
        } 
      } 
      return false; 
    },
    addUser : function(user) {
      if (user instanceof User && !this.exists(user)) {
        users.push(user);
      }
      return users.length;
    },
    count: function() {
      return users.length;
    },
    getProperty: function(property) {
      var properties = [];
      for (var i=0; i < users.length; i++) {
        var usr = users[i];
        if (usr.hasOwnProperty(property)) {
          properties.push(usr[property]);
        }
      }
      return properties;
    },
    totalMessages: function() {
      return sumaTotal.apply(this, users);
    }
  }
}
)();