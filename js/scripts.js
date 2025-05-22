// querySelector
const heading =document.querySelector('.header__texto h2') // 0 o 1 elementos
console.log(heading);
heading.textContent = 'Nuevo heading';
//queryselectorall
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);
enlaces[0].textContent = 'Nuevo texto para enlace';
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');
//getelementbyid
const heading2 = document.getElementById('heading')
console.log(heading2);

//generar un nuevo enlace
const nuevoEnlace = document.createElement('A')

//agregar el href
nuevoEnlace.href ='nuevo-enlace.html';
//agregar el texto
nuevoEnlace.textContent = 'Un nuevo enlace';

//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);
console.log(nuevoEnlace)

//eventos
console.log(1);
window.addEventListener('load', imprimir ); //load espera a que el js y los archivos que dependen del html esten listos
window.onload = function(){
    console.log(3);
}
document.addEventListener('DOMContentLoaded', function(){//solo espera el html, pero no espera el CSS o imagenes
    console.log(4);
})


console.log(5);
function imprimir(){
    console.log(2);
}

//seleccionar elementos y asociarlos
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento)
{
    console.log(evento)
    evento.preventDefault();
    //validar formulario
    console.log('Enviando formulario');
})