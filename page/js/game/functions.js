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

function declareVar(vari, val) {
  var thing1 = vari;
  var thing2 = val;
  if (getVar(thing1) === undefined) {
    storage[thing1] = val;
    return true;
  } else {
    return false;
  }
}

function getVar(vari) {
  var thing1 = vari
  return storage[thing1];
}

function killVar(vari) {
  var thing1 = vari;
  delete storage[thing1];
}

function moveBackground() {
  if (keyIsDown(UP_ARROW) && transY <= 0) {
    transY+=5;
  }
  if (keyIsDown(DOWN_ARROW && transY >= -4320)) {
    transY-=5;
  }
  if (keyIsDown(RIGHT_ARROW) && transY <= 0) {
    transX-=5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    transX+=5;
  }
}