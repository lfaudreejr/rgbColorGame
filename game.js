
//number of squares available
var numSqrs = 6;
//holds array of random colors
var colors = generateRandomColors(numSqrs);
//squares to hold colors
var squares = document.querySelectorAll(".square");
//color chosen to be target
var pickedColor = pickColor();
//html to display our target color
var colorDisplay = document.querySelector("#colorDisplay");
//html to display message "correct" or "try again"
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
//reset Colors button
var resetButton = document.querySelector("#reset");
//show our target color in header
colorDisplay.textContent = pickedColor;
//buttons for easy and hard modes
var modeBtns = document.querySelectorAll(".mode");

//initialize game on load
(function init(){
    //initialize events for mode buttons
    setupBtns();

    gameInit();
})();

//game initialization when called
function gameInit(){
        //initialize squares
    for(var i = 0; i < squares.length; i++){
        //add initial colors to squares
        squares[i].style.background = colors[i];

        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.background;
            //compare color to picked color
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
                resetButton.textContent = "Play Again?";
            }
            else{
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}
//setup button listeners
function setupBtns(){
        //initialize events for mode buttons
    for(var i = 0; i < modeBtns.length; i++){
        modeBtns[i].addEventListener("click", function(){
            modeBtns[0].classList.remove("active");
            modeBtns[1].classList.remove("active");
            this.classList.add("active");
            this.textContent === "Easy" ? numSqrs = 3: numSqrs = 6;
            resetAll(numSqrs);
        })
    }


    //reset button on click
    resetButton.addEventListener("click", function(){
        resetAll(numSqrs);
    })
}

//change all squares to winning color
function changeColors(color) {
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}
//pick a random color of our colors to be the target
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//generate array of random rgb colors
function generateRandomColors(num){
    var arr = [];

    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }

    return arr;
}
//generate random rgb color
function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

//reset colors function
function resetAll(num){
    //generate new colors
    //pick new RandomColor
    //change colors of squares
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickColor();
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}

