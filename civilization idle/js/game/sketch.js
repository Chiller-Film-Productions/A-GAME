var back;
var gridSnapPlaces = [];
var count;
var scl = 1;
var test;
var rainbowPue;
function setup() {
  getData();
  setInterval('saveData()', 5000);
  newVari('money', 0);
  newVari('muffins', 0);
  newVari('moneyType', 'skekel');
  createCanvas(windowWidth*0.98, windowHeight*0.98);
  background(0);
  for (var i = 0; i<7680; i+=32) {
  	for (var j = 0; j<4320; j+=32) {
  		gridSnapPlaces.push(createVector(i, j));
  	}
  }
  test = new building(100, 100, rainbowPue, 'muffins++');
}

function draw() {
	moveBackground();
	scale(scl);
	translate(transX, transY);
	image(back, 0, 0, 3840, 2160);
	fill(255, 0, 0);
	textSize(24);
	text('you have '+vari('money')+' '+vari('moneyType'), 30-transX, 30-transY);
  test.show();
}

function preload() {
	back = loadImage('assets/grass.gif');
  rainbowPue = loadImage('assets/poop pinj.png');
}

function windowResized() {
  resizeCanvas(windowWidth*0.98, windowHeight*0.98);
}
