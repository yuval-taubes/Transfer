let circle = document.getElementById("userShip");

const onMouseMove = (e) => {
	circle.style.left = e.pageX + "px";
};

document.addEventListener("mousemove", onMouseMove);

image = new Image();
image.src = "assets/media/Animated-Bomb-PNG.png";

// get a refrence to the canvas and its context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// newly spawned objects start at Y=25
var spawnLineY = 25;

// spawn a new object every 1500ms
var spawnRate = 1500;

// set how fast the objects will fall
var spawnRateOfDescent = 0.5;

// when was the last object spawned
var lastSpawn = -1;

// this array holds all spawned object
var objects = [];

// save the starting time (used to calc elapsed time)
var startTime = Date.now();




  
  var xSpawnArray = [];
  setInterval(function () {
    var xSpawn = Math.random() * (canvas.width - 30) + 15;
    xSpawnArray.push(xSpawn)
  }, 100);
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
xSpawn = Math.random() * (canvas.width - 30) + 15;