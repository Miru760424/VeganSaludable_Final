class Producto {
  constructor (nombre, presentación, precio) {
    this.nombre = nombre.toUpperCase();
    this.presentación = presentación;
    this.precio = parseFloat(precio);
  }
  sumaIva () {
   this.precio = this.precio * 1.21;
   console.log("Nombre del producto: "+ this.nombre);
   console.log("Presentación: "+ this.presentación);
   console.log("Precio: $ "+ this.precio);
  }
}

const producto1 = new Producto ("Shampoo Sólido Anticaspa - Fortalecedor", "Pastilla de 150 gr.", "578.52");
const producto2 = new Producto ("Acondicionador Sólido Cabellos Normales", "Pastilla de 75 gr.", "628.10");
producto1.sumaIva ();
producto2.sumaIva ();

  
  
