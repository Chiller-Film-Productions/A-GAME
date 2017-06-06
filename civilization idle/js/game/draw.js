function drawStuff() {
	if (!placing) {
	moveBackground();
	}
	scale(scl);
	translate(transX, transY);
	image(back, 0, 0, 3840, 2160);
	fill(255, 0, 0);
	textSize(24);
	text('you have '+vari('money')+' '+vari('moneyType')+'!', 30-transX, 30-transY);
    text('you have '+vari('gems')+' gems!', 30-transX, 60-transY);
    text('you have '+vari('XP')+' XP!', 30-transX, 90-transY)
    for (var i = buildings.length - 1; i >= 0; i--) {
        buildings[i].show();
    }
    if (placing) {
        placeThing.show();
    }
    hamme.show();
    if (hamme.testClick()) {
    	if (placing) {placing = false} else {placing = true}
    }
    test.show();
}