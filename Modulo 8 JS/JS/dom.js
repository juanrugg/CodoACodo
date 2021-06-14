
/*
function sumarTotal(){
    console.log("hola funcion normal")
}

var sumar = function(){
    console.log("Hola funcion anonima");
}

sumarTotal();

sumar();
*/

///objeto literal..

var alumno = {
    //key      valor
    nombre : 'Cristian',
    apellido: 'Sanchez',
    edad: 35,

    accion: function(){
        console.log('hola soy un metodo')
    }

}


console.log(alumno);
console.log(alumno.apellido);

alumno.apellido

console.log(alumno.accion());

// Document Object Model...DOM para los amigos

console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.all)

var encabezado

encabezado.innerHTML = '<h3>Hoola probando</h3>'