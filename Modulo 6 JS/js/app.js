
let alumnos = [['Elsa', 'Pablo', 'Juan'],['Jose', 'Gimena', 'Milton']];

let elemento = document.querySelector('.container');
/*
for (let i = 0; i < alumnos.length; i++){
    for( let j = 0 ; j < alumnos[i].length; j++){
    elemento.innerHTML += `<p>${alumnos[i][j]}</p>`;
    
}
}
*//*
elemento.innerHTML += `${alumnos[0][0]}<br>`;
elemento.innerHTML += `${alumnos[0][1]}<br>`;
elemento.innerHTML += `${alumnos[0][2]}<br>`;
elemento.innerHTML += `${alumnos[1][0]}<br>`;
elemento.innerHTML += `${alumnos[1][1]}<br>`;
elemento.innerHTML += `${alumnos[1][2]}<br>`;

alumnos[0][3] ='Luis';
*/

function calcular(){

    let valor1 = Number(prompt('Ingresa un numero: '));
    let valor2 = Number(prompt('Ingresa un numero: '));
    let operacion = prompt('Ingresa la operacion que deseas realizar: ');
    
    let resultado;
    if(operacion === '+'){
        resultado = valor1+valor2;
    }else if(operacion === '-'){
        resultado = valor1-valor2;
    }else if(resultado === '*'){
        resultado = valor1*valor2;
    }else if(resultado === '/'){
        resultado = valor1/valor2;
    }else{
        'Ingresa una opcion correcta'
    }
    elemento.innerHTML=`<button class = 'btn btn-primary'>Calcular</button>`;
    elemento.innerHTML += resultado;
    document.querySelector('button').addEventListener('click', calcular);    
}

document.querySelector('button').addEventListener('click', calcular); 

document.getElementById('calcular').addEventListener('click',(event)=>{
    event.preventDefault(); 
    alert(); 
}) 