function setup() {
	socket = io.connect(document.location.host);
	socket.on('comments', displayComments);
	socket.on('yourId', storeId);
	socket.emit('comments', {id:eyed});
}

function displayComments(data) {
	var com = data[commentPage];
	for (var i = 0; i < com.length; i++) {
		displayComment(com[i]);
	}
}

function displayComment(data) {
	var container = createDiv('');
	container.parent(getElement('comments'));
	var title = createP(data.name);
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

var eyed;

function storeId(data) {
	eyed = data;
}