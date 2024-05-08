const form = document.querySelector('form')
const inputPeso = document.querySelector('#peso')
const inputAltura = document.querySelector('#altura')

// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClosed = document.querySelector('.modal button.close')

const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    btnclosed: document.querySelector('.modal button.close'),
    open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}


form.onsubmit = event => {  //arrow function
  event.preventDefault()
  
  const peso = inputPeso.value
  const altura = inputAltura.value
  
  const result = imcCalc(peso, altura)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}

Modal.btnclosed.onclick = () => Modal.close()

function imcCalc (peso, altura) {
  return (peso / ((altura / 100) ** 2)).toFixed(2)
}