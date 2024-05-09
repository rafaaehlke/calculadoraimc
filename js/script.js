import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js"

const form = document.querySelector("form");
const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");

// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClosed = document.querySelector('.modal button.close')

form.onsubmit = (event) => {
  //arrow function
  event.preventDefault();

  const peso = inputPeso.value;
  const altura = inputAltura.value;

  const showAlertError = notANumber(peso) || notANumber(altura)

  if (showAlertError) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = imcCalc(peso, altura);
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
};

function notANumber(value)  {
  return isNaN(value) || value === ""
}

function imcCalc(peso, altura) {
  return (peso / (altura / 100) ** 2).toFixed(2);
}
