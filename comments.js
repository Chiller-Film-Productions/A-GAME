var eyed;
var maxFlags;
var datap;
var flag;
var like;

function setup() {
	socket = io.connect(document.location.host);
	socket.on('comments', displayComments);
	socket.on('yourId', storeId);
	socket.on('commentSuccess', testSuccess);
	createP('Max number of flags for a comment to get displayed').parent('comments');
	maxFlags = createInput(2).changed(redisplayComments);
	maxFlags.attribute('type', 'number');
	maxFlags.parent('comments');
	createElement('br').parent('comments');
}

function draw() {
	getElement('charcount').innerHTML = getElement('commentCom').value.length+"/120";
	getElement('commentCom').value = getElement('commentCom').value.slice(0, 120);
}

function displayComments(data) {
	datap = JSON.parse(data);
	var come = datap[commentPage].sort(compare);
	for (var i = 0; i < come.length; i++) {
		if (come[i].flags <= parseInt(maxFlags.value()))
		displayComment(come[i]);
	}
	flag = selectClass('flag');
  for (var i = 0; i < flag.length; i++) {
  	flag[i].style.position = 'relative';
  	flag[i].style.left = '2em';
  	flag[i].setAttribute('onmouseover', "this.src = 'images/flag blue.png'");
  	flag[i].setAttribute('onmouseout', "this.src = 'images/flag.png'");
  }
  dislike = selectClass('dislike');
  for (var i = 0; i < dislike.length; i++) {
  	dislike[i].style.position = 'relative';
  	dislike[i].style.left = '1em';
  	dislike[i].setAttribute('onmouseover', "this.src = 'images/thumbs down icon blue.png'");
  	dislike[i].setAttribute('onmouseout', "this.src = 'images/thumbs down icon.png'");
  }
  like = selectClass('like');
  for (var i = 0; i < like.length; i++) {
  	like[i].setAttribute('onmouseover', "this.src = 'images/thumbs up icon blue.png'");
  	like[i].setAttribute('onmouseout', "this.src = 'images/thumbs up icon.png'");
  }
}

var namey;

function displayComment(data) {
	if (typeof data.name == 'object') {
	  namey = data.name.toString().slice(0, data.name.length-6);
  } else {
  	namey = data.name.slice(0, data.name.length-5);
  }
	var container = createDiv('');
	container.parent(getElement('comments'));
	container.style('position', 'relative');
	var title = createP(namey);
	title.parent(container);
	var com = createP(data.com);
	com.parent(container);
	if (sessionStorage.getItem('loginData')) {
	var like = createImg('http://'+window.location.hostname+'/images/thumbs up icon.png');
	like.parent(container);
	like.class('like');
	var dislike = createImg('http://'+window.location.hostname+'/images/thumbs down icon.png');
	dislike.parent(container);
	dislike.class('dislike');
	var flag = createImg('http://'+window.location.hostname+'/images/flag.png');
	flag.parent(container);
	flag.class('flag');
  }
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
		location.reload();
	} else {
		alert('comment posted unsuccessfully. You probably used a swear word in your comment.');
	}
}

function compare(a, b) {
	return b.totalLike-a.totalLike;
}

function redisplayComments() {
	var val = parseInt(maxFlags.value())
	getElement('comments').innerHTML = 'COMMENTS'
	createP('Max number of flags for a comment to get displayed').parent('comments');
	maxFlags = createInput(2).changed(redisplayComments);
	maxFlags.attribute('type', 'number');
	maxFlags.parent('comments');
	createElement('br').parent('comments');
	maxFlags.value(val);
	displayComments(JSON.stringify(datap));
}

function selectClass(classs) {
	return document.getElementsByClassName(classs)
}

function doCommentActivity(doo, idd) {
	dataeap = {
		loginData: sessionStorage.getItem('loginData');
		id:idd
	}
	if (doo > 0) {
		socket.emit('likeComment', dataeap);
	} else if (doo < 0) {
		socket.emit('dislikeComment', dataeap);
	} else if (doo == 0) {
		socket.emit('flagComment', dataeap);
	}
}