        // Variables Globales

let elementos = document.querySelector('.elementos');
let agregar = document.querySelector('#agregar');
let eliminar = document.querySelector('#eliminar');
let listaDatos = document.querySelector('ul');

        //Boton Agregar

agregar.addEventListener('click', ()=>{
    agregarTodo();
})        

function agregarTodo () {

    if (!elementos.value == " "){

        let contenedorIndividual = document.createElement('div')
        let elementoNuevo = document.createElement('li');
        let botonesEstilo = document.createElement('button');
        let botonesRemove = document.createElement('button');
    
        contenedorIndividual.className = "divisorelementos"
        elementoNuevo.className = "textotodo"
        botonesEstilo.className = "btn2";
        botonesEstilo.innerText = "✔"
        botonesRemove.className = "btn2";
        botonesRemove.innerText =  "X"
        
    
        elementoNuevo.innerText = elementos.value;
    
        contenedorIndividual.appendChild(elementoNuevo);
        contenedorIndividual.appendChild(botonesEstilo);
        contenedorIndividual.appendChild(botonesRemove);
        listaDatos.appendChild(contenedorIndividual);

    };
    elementos.value ="";    
};

    //Boton Eliminar Todos

eliminar.addEventListener('click', ()=>{
    let borrarSegmentos = document.querySelectorAll('.divisorelementos');
    for ( let i = 0; i < borrarSegmentos.length; i++) {
        borrarSegmentos[i].remove();
    }
    elementos.value ="";
})    

    //Boton Eliminar Individual "X" y cambiar estilo 

listaDatos.addEventListener('click', e =>{
    if (e.target.innerHTML == "X"){
        const elementoPadre = e.target.parentElement;
        listaDatos.removeChild(elementoPadre)
    }
    if (e.target.innerHTML == "✔"){
        const elementoPrimo = e.target.previousSibling;
        if(elementoPrimo.style.color === "black"){
            elementoPrimo.style.color = "red";
            elementoPrimo.style.textDecorationLine ="line-through";
        }else{
            elementoPrimo.style.color ="black";
            elementoPrimo.style.textDecorationLine ="none";
    
        }
        }
    


})    

