var numSquare = 6;
var colors = generateRandomColor(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDis");
var mode = document.querySelectorAll(".mode");
var msg = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

diffChanger();

function diffChanger() {
  for (var i = 0; i < mode.length; i++) {
    mode[i].addEventListener("click", function () {
      mode[0].classList.remove("selected");
      mode[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "EASY" ? (numSquare = 3) : (numSquare = 6);
      reset();
    });
  }
}

function reset() {
  colors = generateRandomColor(numSquare);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colordisplay to matched picked color
  colorDisplay.textContent = pickedColor;
  msg.textContent = " ";
  resetButton.textContent = " New Colors ";
  //change colors of square
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function () {
  reset();
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add initial color to square
  squares[i].style.background = colors[i];

  //add click to squares
  squares[i].addEventListener("click", function () {
    // grab color of picked square
    var clickedColor = this.style.background;

    //compare color to picked color
    if (clickedColor === pickedColor) {
      msg.textContent = "Correct! ";
      changeColor(clickedColor);
      h1.style.background = clickedColor;
      resetButton.textContent = "Play Again?";
    } else {
      this.style.background = "#232323";
      msg.textContent = "Try again! ";
    }
  });
}

function changeColor(color) {
  //loop through all squares
  for (
    var i = 0;
    i < squares.length;
    i++ //change each color to match picked color
  ) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColor(num) {
  //make array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}
function randomColor() {
  //pick a red from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick green from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick blue from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
