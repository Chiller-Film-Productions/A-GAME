var eyed;

function setup() {
	socket = io.connect(document.location.host);
	socket.on('comments', displayComments);
	socket.on('yourId', storeId);
	socket.on('commentSuccess', testSuccess)
}

function draw() {
	getElement('charcount').innerHTML = getElement('commentCom').value.length+"/120";
	getElement('commentCom').value = getElement('commentCom').value.slice(0, 120);
}

function displayComments(data) {
	var datap = JSON.parse(data);
	var come = datap[commentPage];
	for (var i = 0; i < come.length; i++) {
		displayComment(come[i]);
	}
}

var namey;

function displayComment(data) {
	if (typeof data.name == 'object') {
	  namey = data.name.toString().slice(0, data.name.length-6);
  }
	var container = createDiv('');
	container.parent(getElement('comments'));
	var title = createP(namey);
	title.parent(container);
	var com = createP(data.com);
	com.parent(container);
	container.style('width', '30em');
	container.style('word-wrap', 'break-word');
	container.style('outline-style', 'solid');
	container.style('outline-color', 'rgb(75, 255, 150)');
	container.style('margin','1em');
}

function getElement(id) {
	return document.getElementById(id);
}

function storeId(data) {
	eyed = data;
	socket.emit('comments', {id:eyed});
}

function postComment(data) {
	if (!sessionStorage.getItem('loginData')) {
		window.location = 'login'
	} else {
		var userData = JSON.parse(sessionStorage.getItem('loginData'));
		var dataSend = {loginInfo:userData, com:data.value, page:commentPage, id:eyed}
		socket.emit('postComment', dataSend);
	}
}

function testSuccess(data) {
	if (data) {
		alert('comment posted successfully! :-D');
	} else {
		alert('comment posted unsuccessfully');
	}
}