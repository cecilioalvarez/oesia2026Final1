class Servicio {
  imprimir() {
    console.log("Hola mas rapido");
  }
    sumar( a,b) {
    console.log(a+b);
  }
}
console.log("******log de datos*")
const servicio = new Servicio();
servicio.imprimir();
servicio.sumar(5, 10);