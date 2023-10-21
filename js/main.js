const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const res = document.querySelector('#result')

btn.addEventListener('click', answearText)

function checkingCompositeNumber(input) {
    const str = input.value
    const pattern = '0123456789876543210';

    if(str === '') {
      return 'У вас пустое поле ввода'
    } else if (pattern.includes(str)) {
      return 'Данное составное число соответсвует'
    } else {
      return 'Данное составное число не соответсвует'
    }


  }
function answearText() {
    const result = checkingCompositeNumber(input)

    res.innerHTML = result
}





