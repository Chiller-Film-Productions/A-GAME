var socket;
var loginData = {};
function getElement(id) {
	return document.getElementById(id);
}
function login(username, password) {
	if (username === "") {
		alert('"username" field required');
	} else if (password === "") {
		alert('"password" field required');
	} else {
		loginData = {
			name: username+'.json',
			pass: password,
			id: eyed
		}
		socket.emit('testCreds', loginData);
		console.log('data sent');
	}
}

function setup() {
	socket = io.connect(document.location.host);
	socket.on('testCredsRes', loginSuccess);
	socket.on('yourId', storeId);
}

function loginSuccess(data) {
	if (!data) {
		alert('username or password incorrect');
	} else {
		alert('you have signed in successfully! :-D');
		sessionStorage.setItem('loginData', JSON.stringify(loginData));
		window.location = 'http://'+document.location.host;
	}
}

var eyed;

function storeId(data) {
	eyed = data;
}