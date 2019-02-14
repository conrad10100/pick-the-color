var colors=[];
var correctColor;
window.onload = function(){
  createSquare();
  document.getElementById("resetButton").observe("click",reset);
}

function createSquare() {
  randomColor= Math.floor(Math.random()*6);//will create random numbers between [0-5]
  for (var i = 0; i < 6; i++) {

    red= Math.floor(Math.random()*255);//will create random numbers between [0-255]
    green= Math.floor(Math.random()*255);
    blue= Math.floor(Math.random()*255);
    randomColor= Math.floor(Math.random()*6);//will create random numbers between [0-5]
    colors[i]="rgb("+red+", "+green+", "+blue+")";
    document.getElementsByClassName('square')[i].style.background = colors[i];
    document.getElementsByClassName("square")[i].observe("click",checkBox);
  }
  correctColor = colors[randomColor];
  document.getElementById("name").innerHTML = correctColor;

}
function checkBox() {
  var pickedColor = this.style.background;
  if (pickedColor == correctColor) {
      this.style.background = "white";
      document.getElementById("result").innerHTML = "WIN";
      for (var i = 0; i < 6; i++) {
        document.getElementsByClassName('square')[i].style.background = correctColor;
      }
  }
  else {
    this.style.background = "#232323";
  }
}

function reset() {
  createSquare()
  document.getElementById("result").innerHTML = "";
}
