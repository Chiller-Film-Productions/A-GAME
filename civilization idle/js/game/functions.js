var a;
var storage;
var transX = 0;
var transY = 0;
function fullscreenElem(elem) {
  if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
}
}

function getData() {
  if (localStorage.getItem('data') === null) {
    localStorage.setItem('data', '{}');
    storage = JSON.parse(localStorage.getItem('data'));
    return storage;
  } else {
    storage = JSON.parse(localStorage.getItem('data'));
    return storage;
  }
}

function saveData() {
  localStorage.setItem('data', JSON.stringify(storage));
  console.log('saved');
}

function vari(varia, val) {
  var thing1 = varia;
  var thing2 = val;
  if (thing2 !== undefined) {
    storage[thing1] = val;
    return storage[thing1];
 } else {
  return storage[thing1];
 }
}

function newVari(varia, val) {
  var thing1 = varia;
  var thing2 = val;
  if (vari(thing1) === undefined) {
  	vari(thing1, thing2);
  }
}

function clearUserData() {
  storage = {}
}

function moveBackground() {
  if (keyIsDown(UP_ARROW)) {
    transY+=5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    transY-=5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    transX-=5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    transX+=5;
  }
  if (key === 'x' && keyIsPressed) {
    scl-=0.01;
  }
  if (key === 'z' && keyIsPressed) {
    scl+=0.01
  }
}
var close;
var pos;
var thing;
var best;
function snapGrid(vect) {
  pos = vect;
  thing;
  best = gridSnapPlaces[0];
  for (var i = 0; i < gridSnapPlaces.length; i++) {
    thing = gridSnapPlaces[i];
    if (pos.dist(best)>pos.dist(thing)) {
      close = pos.dist(best);
      best = thing;
    }
  }
  return best;
}
