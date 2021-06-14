/*let nombre  = prompt("Ingresa tu nombre: ");
let apellido = prompt("Ingresa tu apellido: ");

console.log("Hola "+nombre+" "+apellido);

if(nombre == " "){
    alert("Epa, no pusiste ningun nombre picaron");
}else{
    console.log("Bienvenido "+nombre+" "+apellido);
}
console.log(nombre.length); 
*/
/*
let numero = prompt("Ingresa un numero: ");
let numero2 = prompt("Ingresa un numero: ");

console.log(parseInt(numero)+parseInt(numero2)); */
/*
let numero3 = Number(prompt("Ingresa un numero: "));
let numero4 = Number(prompt("Ingresa un numero: "));

if(numero3 == true && numero4 == true ){
    console.log(numero3+numero4);
}if(isNaN(numero3)){
    alert("El primer valor no es un numero");

}if(isNaN(numero4)){
    alert("El segundo valor no es un numero");
}
*/
/*
let edad = Number(prompt('Ingresa tu edad: '));

if(edad>=18){
   alert('Bievenido, sos mayor de edad')
}else{
    alert('Lo siento, sos menor de edad')
}
*/

let menu = prompt('Menu del dia \n 1.Milanesa Sola \n 2. Mila con papas \n 3. Mila Napolitana')
/*
if(menu==1){
    alert('El menu elegido es Milanesa Sola')
}else if(menu==2){
    alert('El menu elegido es Milanesa con papas fritas')
}else if(menu==3){
    alert('El menu elegido es Mila Napolitana!')
}*/

switch (menu) {
    case "1":
        alert('El menu elegido es Milanesa Sola');
        break;

    case "2":
        alert('El menu elegido es Milanesa con papas fritas');
        break;
        
    case "3":
        alert('El menu elegido es Mila Napolitana!');
        break    
    default:
        alert('Debes ingresar un dato valido');
        break;
}

