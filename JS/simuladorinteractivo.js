//Declaración de variables
var nombrePrimerProducto = prompt ("Ingresar nombre del primer producto");
var precioPrimerProducto =  parseInt(prompt ("Ingresar el precio del primer producto"));
var nombreSegundoProducto = prompt ("Ingresar nombre del segundo producto");
var precioSegundoProducto = parseInt(prompt ("Ingresar el precio del segundo producto"));

let precioTotal = 0;

function sumar (precioPrimerProducto, precioSegundoProducto) {
    precioTotal = precioPrimerProducto + precioSegundoProducto;
}

sumar (precioPrimerProducto, precioSegundoProducto);

alert ("El precio total es" + precioTotal);


