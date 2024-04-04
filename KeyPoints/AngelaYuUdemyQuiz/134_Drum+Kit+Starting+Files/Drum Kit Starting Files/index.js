//a high order function that play a drum by clicking on it

//creates a function that add an eventhandler to each drum button

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    switch (this.innerHTML) {
      case "w":
        var tom1 = new Audio("sounds/" + "tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/" + "tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/" + "tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/" + "tom-4.mp3");
        tom4.play();
        break;

      default:
        console.log(this.innerHTML);
    }
  });
}
