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