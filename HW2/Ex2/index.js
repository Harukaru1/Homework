var numberOfDrumButtons = document.querySelectorAll(".holo").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".holo")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/shirakami-fubuki-yabe.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/peko_HzXNcWG.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/coco-hi-honey.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/gawr-gura-a.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/watson_amelia_im_horny.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/suisei-hi-honey_qwUSTa0.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/oozora-subaru-shuba.mp3");
      kick.play();
      break;
    case "f":
      var snare = new Audio("sounds/mogumogu.mp3");
      snare.play();
      break;

    case "g":
      var crash = new Audio("sounds/botan-hi-honey.wav");
      crash.play();
      break;

    case "h":
      var kick = new Audio('sounds/botan-hi-honey.mp3');
      kick.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
