let alturaUsuario=document.getElementById("alturaUsuario");
let pesoUsuario = document.getElementById("pesoUsuario");
let imc= pesoUsuario/ (alturaUsuario*alturaUsuario);
let resultado = document.getElementById("resultado");
boton.addEventListener("click",resolverEjercicio);


function resolverEjercicio(){
    alturaUsuario = document.getElementById("alturaUsuario").value
    pesoUsuario = document.getElementById("pesoUsuario").value


    if(alturaUsuario == ""){
        resultado.textContent="el campo altura usuario esta vacio";
    }else if(pesoUsuario == ""){
        resultado.textContent="el campo peso usuario esta vacio";
    }else{
        imc=pesoUsuario/ (alturaUsuario*alturaUsuario);
        if(imc<18.5){
            resultado.textContent=("El Peso Del Usuario Es Insuficiente")
        
        }else if(imc >=18.5 && imc <=24.9){
            resultado.textContent=("El Peso Del Usuario Es Normal")
        
        
        }else if(imc >=25 && imc <=26.9){
            resultado.textContent=("El Usuario Tiene Sobrepeso Grado 1")
        
        
        }else if(imc >=27 && imc <=29.9){
            resultado.textContent=("El Usuario Tiene Sobrepeso Grado 2 (Preobesidad)")
        
        
        }else if(imc >=30 && imc <=34.9){
            resultado.textContent=("El Usuario Tiene Obesidad Grado 1")
        
        }else if(imc >=35 && imc <=39.9){
            resultado.textContent=("El Usuario Tiene Obesidad Grado 2")
        
        
        }else if(imc >=40 && imc <=49.9){
            resultado.textContent=("El Usuario Tiene Obesidad Morbida Grado 3")
        
        
        }if(imc>=50){
            resultado.textContent=("El Usuario Tiene Obesidad Extrema Grado 4")
        }     

    }
    

}



