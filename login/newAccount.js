function createAccount(username, passwordA, passwordB) {
	if (passwordA !== passwordB) {
		alert('passwords are not the same.');
	} else {
		var data = {
			'name':username+'.json',
			'pass':passwordA,
			'id':eyed
		}
		socket.emit('newUser', data);
	}
}
function setup() {
	socket = io.connect(document.location.host);
	socket.on('newUser', createSuccess);
	socket.on('yourId', storeId);
}

function getElement(id) {
	return document.getElementById(id);
}

function createSuccess(data) {
	if (!data) {
		alert('username taken');
	} else {
	  alert('Account created successfully! :-D We will now redirect you to the sign in page so you can sign in to your new account.');
	  window.location = 'index.html';
	}
}

var eyed;

function storeId(data) {
	eyed = data;
}