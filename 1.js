const pipe1 = document.getElementById("pipe1");
const pipe2 = document.getElementById("pipe2");
const game = document.getElementById("game");

function setRandomHeight() {
    let minHeight = 50;
    let maxHeight = 280;
    let gap = 140;

    let pipe1Height = Math.floor(Math.random() * (maxHeight - minHeight +1) + minHeight)
    pipe1.style.height = pipe1Height + 'px'

    let pipe2Height = game.clientHeight - pipe1Height - gap;
    pipe2.style.height = pipe2Height + 'px'
}
setInterval(setRandomHeight, 3000);

var jumping = 1;
var jumpSpeed = -2;
var gravitySpeed = 0.1;
var bird = document.getElementById('bird');
var jumpSound = new Audio("fly.mp3");

document.addEventListener('keydown', function (event) {
   if(event === 'Space'){
    jumping = jumpSpeed;
    jumpSound.currentTime = 0;
    jumpSound.play()
   }
})