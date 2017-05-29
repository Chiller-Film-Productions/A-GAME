var back;

function setup() {
  getData();
  setInterval('saveData()', 5000);
  createCanvas(1280, 720);
  background(0);
}

function draw() {
	moveBackground();
	translate(transX, transY);
	image(back, 0, 0);
}

function preload() {
	back = loadImage('assets/grass.gif');
}