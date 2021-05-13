let horasTrabajadas = document.getElementById("numeroHorasTrabajadas");
let boton = document.getElementById("boton");
let resultado = document.getElementById("resultado");
let nombreUsuario = document.getElementById("nombreDeUsuario");
boton.addEventListener("click",resolverEjercicio);

function resolverEjercicio(){
    let valorHorasTrabajadas = numeroHorasTrabajadas.value;
    nombreUsuario = nombreUsuario.value;


    if(nombreUsuario == ""){
        resultado.textContent="el campo nombre usuario esta vacio";
    }else if(valorHorasTrabajadas == ""){
        resultado.textContent="el campo horas trabajadas esta vacio";
    }else{
        if(valorHorasTrabajadas<=40){
            let salario=valorHorasTrabajadas*20000;
            resultado.textContent="su salario es de: " + salario;
        }else{
            let horasExtras = valorHorasTrabajadas-40;
            let salario =(40*20000)+(horasExtras*25000);
            resultado.textContent="su salario es de: " + salario;
        }
    
    }

}