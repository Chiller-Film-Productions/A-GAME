var back;
var gridSnapPlaces = [];
var datYee;
var count;
function setup() {
  getData();
  setInterval('saveData()', 5000);
  createCanvas(1280, 720);
  background(0);
  count = 0;
  for (var i = 0; i<7680; i+=128) {
  	for (var j = 0; j<4320; j+=128) {
  		gridSnapPlaces.push(createVector(i, j));
  	}
  }
}

function draw() {
	moveBackground();
	translate(transX, transY);
	image(back, 0, 0, 7680, 4320);
	var datYee = snapGrid(createVector(mouseX, mouseY));
	fill(255, 0, 0);
	ellipse(datYee.x, datYee.y, 10, 10);
}

function preload() {
	back = loadImage('assets/grass.gif');
}