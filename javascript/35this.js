//This

const reserva1 = {
    nombre: 'Antonio',
    apellidos: 'García',
    total: 5000,
    pagado: false,
    información: function() {
        // console.log(`El cliente ${nombre} tiene una reserva que suma a un total de ${total}.`); //Va a dar error
        console.log(`El cliente ${reserva1.nombre} tiene una reserva que suma a un total de ${reserva1.total}.`); 
    }
}

//En este caso va a dar error porque el nombre lo va a buscar fuera de la función y no lo va a encontrar, la otra forma de poder llamarlo es ${reserva1.nombre}, pero si cambiamos el nombre del objeto hay que cambiar todo







const reserva2 = {
    nombre: 'Pedro',
    apellidos: 'García',
    total: 5000,
    pagado: false,
    información: function() {
        console.log(`El cliente ${this.nombre} tiene una reserva que suma a un total de ${this.total}.`); //la palabra reservada this le dice a la función que el nombre es el de este objeto y que busque por fuera del objeto
    }
}

reserva1.información();
reserva2.información();