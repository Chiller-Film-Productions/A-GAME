var back;
var gridSnapPlaces = [];
var datYee;
var count;
var scl = 1;
function setup() {
  getData();
  setInterval('saveData()', 5000);
  newVari('money', 0);
  newVari('moneyType', 'skekel');
  createCanvas(windowWidth*0.98, windowHeight*0.98);
  background(0);
  count = 0;
  for (var i = 0; i<7680; i+=64) {
  	for (var j = 0; j<4320; j+=64) {
  		gridSnapPlaces.push(createVector(i, j));
  	}
  }
}

function draw() {
	moveBackground();
	scale(scl);
	translate(transX, transY);
	image(back, 0, 0, 3840, 2160);
	fill(255, 0, 0);
	textSize(24);
	text('you have '+vari('money')+' '+vari('moneyType'), 30-transX, 30-transY);
}

function preload() {
	back = loadImage('assets/grass.gif');
}

function windowResized() {
  resizeCanvas(windowWidth*0.98, windowHeight*0.98);
}
