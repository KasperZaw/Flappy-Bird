

    const startPage = document.getElementById("start-page");
    const playButton = document.getElementById("play-button");
    const background = document.getElementById("background");
  
    playButton.addEventListener("click", function() {
      startPage.style.display = "none";
      background.style.display = "block";
    });
  
window.onload = function(){
    // Select the pipe elements
    const pipe1 = document.getElementById("pipe1");
    const pipe2 = document.getElementById("pipe2");
    const game = document.getElementById("game");

    // Set the height of the pipes to a random value between the minimum and maximum height
    function setRandomHeight() {
        let minHeight = 50; // minimum height for the pipes
        let maxHeight = 280; // maximum height for the pipes
        let gap = 150; // gap between the pipes

        // Get a random height for the first pipe
        let pipe1Height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        // Set the height of the first pipe
        pipe1.style.height = pipe1Height + "px";

        // Get the height for the second pipe from the game height we devide pipe1 height and we devide also gap so nowe we know the height of the pipe2
        let pipe2Height = game.clientHeight - pipe1Height - gap;// clientHeight is height of the element game its 0 or have taking height of css of element game
        // Set the height of the second pipe in px 
        pipe2.style.height = pipe2Height + "px";

    }
    setInterval(setRandomHeight, 3000); // call the function every 3 seconds
};
let animationDuration = 3;

// Every 2 seconds, decrease the animation duration by 0.1 seconds
/*setInterval(() => {
  animationDuration -= 0.1;
  pipe1.style.animationDuration = `${animationDuration}s`;
  pipe2.style.animationDuration = `${animationDuration}s`;
}, 2000);
*/
var jumping = 1;
var jumpSpeed = -2;
var gravitySpeed = 0.1  ;
var bird = document.getElementById('bird');
var jumpSound = new Audio("fly.mp3");

document.addEventListener('keydown', function (event) {
    if(event.code === 'Space'){
        jumping = jumpSpeed;
        jumpSound.currentTime = 0;
        jumpSound.play();
    }
});

setInterval(function(){
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    bird.style.top = (birdTop + jumping)+"px";
    jumping += gravitySpeed;
},10);

function checkCollision() {
    // Get the bounding rectangles of the bird and pipes
    const birdRect = bird.getBoundingClientRect();
    const pipe1Rect = pipe1.getBoundingClientRect();
    const pipe2Rect = pipe2.getBoundingClientRect();
    const background = document.getElementById('background');
    const backgroundRect = background.getBoundingClientRect();
    // Check if the bird collides with the first pipe
    if (birdRect.left < pipe1Rect.right && birdRect.right > pipe1Rect.left && 
        birdRect.top < pipe1Rect.bottom && birdRect.bottom > pipe1Rect.top) {
        alert(`Game over ${score}`);
        location.reload();
    } 

    // Check if the bird collides with the second pipe
    if (birdRect.left < pipe2Rect.right && birdRect.right > pipe2Rect.left && 
        birdRect.top < pipe2Rect.bottom && birdRect.bottom > pipe2Rect.top) {
        alert(`Game over! Score: ${score}`);
        location.reload();
    }
    if (birdRect.y + birdRect.height >= groundRect.y) {
        // Show the alert and reload the page
        alert(`Game over! Score: ${score}`);
        location.reload();
    }
    

}

// Call the checkCollision function every 10 milliseconds
setInterval(checkCollision, 10);

 setInterval(function(){
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    bird.style.top = (birdTop + jumping)+"px";
    jumping += gravitySpeed;
    let birdRect = bird.getBoundingClientRect();
    if (birdRect.bottom > window.innerHeight) {
        location.reload()
       
        
    }
},100);


let score = 0;
const scoreElement = document.getElementById("score");

pipe1.addEventListener("animationiteration", incrementScore);
let coinSound = new Audio('coin.mp3') 

function incrementScore() {
    score++;
    scoreElement.textContent = score;
    coinSound.currentTime = 0;
    coinSound.play();
}


