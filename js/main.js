const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const res = document.querySelector('#result')

btn.addEventListener('click', answearText)

function checkingCompositeNumber(input) {
    let str = input.value
    // Numbers
    const pattern = '0123456789876543210';
    // Letter
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    // Letters to reverse
    const lowercaseLettersReverse = 'abcdefghijklmnopqrstuvwxyz'.split('').reverse('').join('')
    // Folding all letters
    const upperAllLowerAll = lowercaseLetters + lowercaseLettersReverse

    str = str.replace(/[\s\.\-\,]/g, "")
    str = str.toLowerCase()

    if(str === '') {
      return 'У вас пустое поле ввода'
    } else if (pattern.includes(str)) {
      return 'Данное составное число соответсвует'
    } else if (upperAllLowerAll.includes(str)) {
      return 'Данные составные буквы соответсвуют'
    } else {
      return 'Ой, кажется что-то вы пропустили'
    }


  }
function answearText() {
    const result = checkingCompositeNumber(input)

    res.innerHTML = result
}
