
/*
function mayorEdad(){

let edad = Number(prompt('Ingresa tu edad: '));


if(edad>= 18){
    alert('Sos mayor de edad!');
}else{
    alert('No sos mayor de edad!');
}
}

mayorEdad();
*/

function mayorEdad() {

    let edad = []
    let mayorNum = 0;
    for (let i = 0; i < 3; i++) {


        edad[i] = Number(prompt('Ingresa tu edad: '));

        if (edad[i] > mayorNum) {
            mayorNum = edad[i];

        }

    }


    alert('La mayor edad es: ' + mayorNum);

}

mayorEdad();


