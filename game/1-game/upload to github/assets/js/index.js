// get a refrence to the canvas and its context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//modal
const modal = document.getElementById("modal");
const modalTwo = document.getElementById("modal-2");
const startGame = document.getElementById("start-game");
const playAgain = document.getElementById("play-again");

startGame.addEventListener("click", () => {
  modal.style.display = "none";
  startTimer();
  canvas.style.display = "block";
});

playAgain.addEventListener("click", () => {
  modalTwo.style.display = "none";
  startTimer();
});

//score

const surviveTime = document.getElementById("surive-time");

const scoreText = document.getElementById("score-text");
var minute = 0;
var second = 0;
var stopTime = true;

function startTimer() {
  if (stopTime == true) {
    stopTime = false;
    timerCycle();
  }
}

function stopTimer() {
  if (stopTime == false) {
    stopTime = true;
    let time = `${minute}:${second}`;
    surviveTime.innerText = String(time);
  }
}

function timerCycle() {
  if (stopTime == false) {
    second = parseInt(second);
    minute = parseInt(minute);

    second = second + 1;

    if (second == 60) {
      minute = minute + 1;
      second = 0;
    }

    if (second < 10 || second == 0) {
      second = "0" + second;
    }
    if (minute < 10 || minute == 0) {
      minute = "0" + minute;
    }

    scoreText.innerText = `${minute}:${second}`;

    setTimeout("timerCycle()", 1000);
  }
}

//yuval code area


let circle = document.getElementById("userShip");

const onMouseMove = (e) => {
  circle.style.left = e.pageX + "px";
};

document.addEventListener("mousemove", onMouseMove);

image = new Image();
image.src = "assets/media/Animated-Bomb-PNG.png";

// newly spawned objects start at Y=25
var spawnLineY = 0;

// spawn a new object every 1500ms
var spawnRate = 1500;

// set how fast the objects will fall
var spawnRateOfDescent = 0.5;

// when was the last object spawned
var lastSpawn = -1;

// this array holds all spawned object
var objects = [];

//holds the data for the user object
var userObject = [];

// save the starting time (used to calc elapsed time)
var startTime = Date.now();

var xSpawnArray = [];
setInterval(function () {
  var xSpawn = Math.random() * (canvas.width - 30) + 15;
  xSpawnArray.push(xSpawn);
  // detectCollisions();

  objects[0] = circle.getBoundingClientRect();
  getDistace();
  console.log()
}, 1000);
// start animating
animate();

function spawnRandomObject() {
  // create the new object
  var object = {
    // set x randomly but at least 15px off the canvas edges
    x: Math.random() * (canvas.width - 30) + 15,
    // set y to start on the line where objects are spawned
    y: spawnLineY,
  };

  // add the new object to the objects[] array
  objects.push(object);
}
console.log(objects);

function animate() {
  // get the elapsed time
  var time = Date.now();

  // see if its time to spawn a new object
  if (time > lastSpawn + spawnRate) {
    lastSpawn = time;
    spawnRandomObject();
  }

  // request another animation frame
  requestAnimationFrame(animate);

  // clear the canvas so all objects can be
  // redrawn in new positions
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // move each object down the canvas
  for (var i = 0; i < objects.length; i++) {
    var object = objects[i];
    // object = document.createElement('div');
    object.y += spawnRateOfDescent;
    ctx.beginPath();
    ctx.drawImage(image, xSpawnArray[i], object.y, 15, 15);
    ctx.imageSmoothingEnabled = false;
    ctx.closePath();
  }
}
function getDistace(){
  for (let i = 0; i < objects.length; i++){
    let xdistance = objects[0].x - objects[i].x;
    let ydistance = objects[0].y - objects[i].y;
    let pythagoras = Math.sqrt( Math.pow(xdistance, 2) + Math.pow(ydistance, 2))
    console.log(pythagoras)
    if(pythagoras < 2 ){
      console.log("hit we got a hit")
    }
  }
}
