const numberOfDrumButtons = document.querySelectorAll(".drum").length;

const makeSound = (key) => {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(key);
  }
};

const buttonAnimation = (currentKey) => {
  const activeButton = document.querySelector("." + currentKey);
  if (activeButton) activeButton.classList.add("pressed");
  setTimeout(function () {
    if (activeButton) activeButton.classList.remove("pressed");
  }, 100);
};

document.querySelectorAll(".drum").forEach((el) => {
  el.addEventListener("click", (e) => {
    makeSound(el.textContent);
    buttonAnimation(el.textContent);
  });
  el.addEventListener("keypress", (e) => {
    makeSound(e.key);
    buttonAnimation(e.key);
  });
});
