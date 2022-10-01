'use strict'

const body = document.querySelector('body')
const guessNumber = document.querySelector('.number')
const score = document.querySelector('.score')
const highScore = document.querySelector('.highscore')
const message = document.querySelector('.message')
const inputNumber = document.querySelector('.guess')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
let randomNumber = Math.floor(Math.random() * 20 + 1)
score.textContent = 20
let tipedNumber
const lose = () => {
  if (score.textContent === 0) {
    message.textContent = 'You loose!'
    inputNumber.setAttribute('disabled', 'disabled')
    checkButton.setAttribute('disabled', 'disabled')
  }
}
const onClick = () => {
  if (inputNumber.value === '') message.textContent = 'Enter the number!'
  else {
    tipedNumber = Number(inputNumber.value)
    if (tipedNumber > randomNumber) {
      message.textContent = 'To much'
      score.textContent--
      lose()
    } else if (tipedNumber < randomNumber) {
      message.textContent = 'Not enough'
      score.textContent--
      lose()
    } else {
      message.textContent = 'You guessed'
      body.style = 'background-color:#60b347'
      guessNumber.textContent = randomNumber
      if (score.textContent > highScore.textContent) {
        highScore.textContent = score.textContent
      }
      inputNumber.setAttribute('disabled', 'disabled')
    }
  }
}
checkButton.addEventListener('click', onClick)
inputNumber.addEventListener('keydown', event => {
  if (event.key === 'Enter') onClick()
})
againButton.addEventListener('click', e => {
  body.removeAttribute('style')
  guessNumber.textContent = '?'
  score.textContent = 20
  randomNumber = Math.floor(Math.random() * 20 + 1)
  inputNumber.value = ''
  inputNumber.removeAttribute('disabled', 'disabled')
  checkButton.removeAttribute('disabled', 'disabled')
  message.textContent = 'Start guessing...'
})
