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
/* call this function to create or overwrite a variable that will be saved to local storage
   syntax: vari('name', value);
 */
function vari(vari, val) {
  var thing1 = vari;
  var thing2 = val;
  if (getVar(thing1) === undefined) {
    storage[thing1] = val;
    return false;
  } else {
    storage[thing1] = thing2;
    return true;
  }
}

/* return the value of a saved variable
   syntax: getVar('name');
 */

function getVar(vari) {
  var thing1 = vari
  return storage[thing1];
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
}
var close;
var pos;
var thing;
var best;

/* returns the closest point on the grid to the point given
   syntax: var vector = createVector(X, Y);
           var closestGridPoint = snapGrid(vector);
 */

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
