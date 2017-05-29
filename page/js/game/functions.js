var storage = {};
var a;

function getData() {
  if (localStorage.getItem('data') === null) {
    saveData();
    storage = localStorage.getItem('data');
    return storage;
  } else {
    storage = localStorage.getItem('data');
    return storage;
  }
}

function saveData() {
  localStorage.setItem('data', storage);
}

function declareVar(vari, val) {
  var thing1 = vari;
  var thing2 = val
  eval("storage."+thing1+" = "+thing2);
}

function getVar(vari) {
  var thing1 = vari
  return storage[  ];
}