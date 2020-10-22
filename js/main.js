"use strict";

const tipElement = document.querySelector(".js-tip");
const tryElement = document.querySelector(".js-try");
let tryNumber = 0;
const btnElement = document.querySelector(".js-btn");
const introElement = document.querySelector(".js-intro");
const randomNumber = getRandomNumber(100);

//Número ramndom//
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log(randomNumber);

//Número de intentos//
function getTryNumber(event) {
  tryNumber++;
  tryElement.value = `Número de intentos: ${tryNumber}`;

  //Mensajes//

  console.log(introElement.value);

  function getNumber() {
    let realNumber = parseInt(introElement.value);
    if (realNumber < randomNumber) {
      tipElement.value = "Demasiado bajo";
      console.log("Demasiado bajo");
    } else if (
      realNumber > randomNumber &&
      realNumber >= 1 &&
      realNumber <= 100
    ) {
      tipElement.value = `Demasiado alto`;
      console.log("Demasiado alto");
    } else if (realNumber === randomNumber) {
      tipElement.value = `Has ganado ¡¡¡campeona!!!`;
      console.log("Has ganado");
    } else if (realNumber > 100) {
      tipElement.value = `El número debe estar entre 1 y 100`;
      console.log("No es el número requerido");
    }
  }
}
btnElement.addEventListener("click", getTryNumber);
