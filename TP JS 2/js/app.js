
let nombreAlumno = prompt('Ingresa el nombre del alumno: ');
/*
let nota = Number(prompt('Ingresa la nota 1 del alumno '+nombreAlumno+' : '))
let nota2 = Number(prompt('Ingresa la nota 2 del alumno '+nombreAlumno+' : '))
let nota3 = Number(prompt('Ingresa la nota 3 del alumno '+nombreAlumno+' : '))

let resultado = (nota+nota2+nota3)/3;

alert('El promedio de las notas de '+nombreAlumno+' es: '+resultado);*/
let notas = [];
let sumaNota = 0;
for (let i = 0; i < 3; i++) {
    let nota = Number(prompt('Ingresa la '+(i+1)+' nota del alumno '+nombreAlumno+' :'));
    sumaNota += nota ;
    

}

let promedio = sumaNota/3;
alert('El promedio de las notas de '+ nombreAlumno+' es: '+promedio);
