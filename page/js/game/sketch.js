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
  for (var i = 0; i<3840; i+=64) {
  	for (var j = 0; j<2160; j+=64) {
  		gridSnapPlaces.push(createVector(i, j));
  	}
  }
}

function draw() {
	moveBackground();
	translate(transX, transY);
	image(back, 0, 0, 3840, 2160);
	var datYee = snapGrid(createVector(mouseX-transX, mouseY-transY));
	fill(255, 0, 0);
	ellipse(datYee.x, datYee.y, 10, 10);
}

function preload() {
	back = loadImage('assets/grass.gif');
}