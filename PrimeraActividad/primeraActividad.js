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

this.get = function(attr) { return this[attr] };
this.set = function(attr) { return this[attr] = attr };

/*
Crear un método “inspect” que liste todas las propiedades.
*/

var getPropiedades = function(user){
   var propiedades = [];
   for(var propiedad in user){
      propiedades.push(propiedad);
   }
   return propiedades;
}