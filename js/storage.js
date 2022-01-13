/* Referencia al Storage */
const db = window.localStorage

const check = document.querySelector('.toggle')
const body = document.querySelector('body')

let oscuro = Boolean(db.getItem('oscuro'))

const comprobarOscuro = oscuro => {
  if (oscuro) {
    body.classList.add('change-color')
    check.checked = true
  }
  else {
    body.classList.remove('change-color')
    check.checked = false
  }
}
comprobarOscuro(oscuro)

const prueba = comprobarOscuro(oscuro)

check.addEventListener('click', function () {
  if (this.checked) {
    body.classList.add('change-color')
    db.setItem('oscuro', true)
  }
  else {
    body.classList.remove('change-color')
    db.removeItem('oscuro')
  }
})