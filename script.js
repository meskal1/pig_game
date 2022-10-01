'use strict'
const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')
const player1ScoreCurrent = document.querySelector('#score--0')
const player2ScoreCurrent = document.querySelector('#score--1')
const player1Score = document.querySelector('#current--0')
const player2Score = document.querySelector('#current--1')
const diceImg = document.querySelector('.dice')
const newGame = document.querySelector('.btn--new')
const rollDice = document.querySelector('.btn--roll')
const hold = document.querySelector('.btn--hold')
const maxValue = 15
const playerActive = () => {
  player1ScoreCurrent.textContent = 0
  player2ScoreCurrent.textContent = 0
  diceImg.classList.add('hidden')
  player1.classList.toggle('player--active')
  player2.classList.toggle('player--active')
}
rollDice.addEventListener('click', () => {
  diceImg.classList.remove('hidden')
  let randomDice = Math.floor(Math.random() * 6 + 1)
  diceImg.src = `./img/dice-${randomDice}.png`
  if (player1.classList.contains('player--active')) {
    player1ScoreCurrent.textContent = +player1ScoreCurrent.textContent + randomDice
  } else {
    player2ScoreCurrent.textContent = +player2ScoreCurrent.textContent + randomDice
  }
  if (randomDice === 1) {
    playerActive()
    diceImg.classList.remove('hidden')
  }
})
hold.addEventListener('click', () => {
  if (player1.classList.contains('player--active')) {
    player1Score.textContent = +player1ScoreCurrent.textContent + +player1Score.textContent
    if (player1Score.textContent >= maxValue) {
      player1.classList.add('player--winner')
      rollDice.setAttribute('disabled', 'disabled')
      hold.setAttribute('disabled', 'disabled')
    } else playerActive()
  } else {
    player2Score.textContent = +player2ScoreCurrent.textContent + +player2Score.textContent
    if (player2Score.textContent >= maxValue) {
      player2.classList.add('player--winner')
      rollDice.setAttribute('disabled', 'disabled')
      hold.setAttribute('disabled', 'disabled')
    } else playerActive()
  }
})
newGame.addEventListener('click', () => {
  if (player2.classList.contains('player--active')) {
    player1.classList.toggle('player--active')
    player2.classList.toggle('player--active')
  }
  player1Score.textContent = 0
  player2Score.textContent = 0
  player1ScoreCurrent.textContent = 0
  player2ScoreCurrent.textContent = 0
  diceImg.classList.add('hidden')
  player1.classList.remove('player--winner')
  player2.classList.remove('player--winner')
  rollDice.removeAttribute('disabled', 'disabled')
  hold.removeAttribute('disabled', 'disabled')
})
