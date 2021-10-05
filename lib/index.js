"use strict";

require("fslightbox");

/* import {suma, saludos} from './operaciones.js';
import Swal from 'sweetalert2';

document.write(`<h1>${suma(4,2)}</h1>`); 

console.log(suma(4,2));

console.log(saludos);

let timerInterval
Swal.fire({
  title: '¡Javier Eduardo!',
  html: 'Seras programador en <b></b> milliseconds.!!!',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */

/*
if (result.dismiss === Swal.DismissReason.timer) {
console.log('I was closed by the timer')
}
})  */

/* import _ from 'lodash';
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component()); */
fsLightboxInstances['first-lightbox'].open(0);

fsLightboxInstances['second-lightbox'].props.onOpen = function () {
  return console.log('Lightbox open!');
};