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
//console.log(1);
//window.addEventListener('load', imprimir ); //load espera a que el js y los archivos que dependen del html esten listos
//window.onload = function(){
//    console.log(3);
//}
//document.addEventListener('DOMContentLoaded', function(){//solo espera el html, pero no espera el CSS o imagenes
//    console.log(4);
//})


//console.log(5);
//function imprimir(){
//    console.log(2);
//}

//seleccionar elementos y asociarlos

//const btnEnviar = document.querySelector('.boton--primario');
//btnEnviar.addEventListener('click', function(evento)
//{
//    console.log(evento)
//    evento.preventDefault();
    //validar formulario
//    console.log('Enviando formulario');
//})


//eventos de los inputs y textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
nombre.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);
//el evento de submit 
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit',function(evento){
    evento.preventDefault();
    //validar el formulario
    const {nombre, email, mensaje} = datos;
    if(nombre === '' || email === '' || mensaje=== '')
    {
        mostrarAlerta('Todos los campos son obligatorios',true);
        return; //corta la ejecucion del codigo
    }
    //crear la alerta de enviar correctamente
    mostrarAlerta('Mensaje enviado correctamente');

    //enviar el formulario
    console.log('Enviando Formulario');
    console.log(nombre);
    console.log(email);
    console.log(mensaje);
})

function leerTexto(e)
{
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    
    //console.log(datos);
}

//
function mostrarAlerta(mensaje, error = null)
{
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error)
    {
        alerta.classList.add('error');
    }
    else
    {
        alerta.classList.add('correcto')
    }
    formulario.appendChild(alerta);
    //desaparesca despues de 5 segundos
    setTimeout(() =>{
        alerta.remove();
    },5000);
}