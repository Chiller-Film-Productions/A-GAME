var back;
var gridSnapPlaces = [];
var count;
var scl = 1;
var buildings = [];
var placing = false;
var cnv;
var hamme;
var boxy;
var test;
function setup() {
  getData();
  setInterval('saveData()', 5000);
  newVari('money', 100);
  newVari('food', 1000);
  newVari('moneyType', 'skekels');
  newVari('gems', 10);
  newVari('XP', 0);
  cnv = createCanvas(windowWidth*0.98, windowHeight*0.98);
  background(0);
  for (var i = 0; i<7680; i+=256) {
  	for (var j = 0; j<4320; j+=256) {
  		gridSnapPlaces.push(createVector(i, j));
  	}
  }
  var thinga = document.getElementById('game');
  cnv.parent(thinga);
  hamme = new button(windowWidth*0.98-150, 30, hammur);
  test = new buildingButton(100, 100);
}

function preload() {
	back = loadImage('assets/grass.gif');
  hammur = loadImage('assets/hammer.png');
  boxy = loadImage('assets/box.png')
}

function windowResized() {
  resizeCanvas(windowWidth*0.98, windowHeight*0.98);
}
