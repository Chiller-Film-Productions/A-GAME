function building(pos, img, fun, intLength) {
  this.pos = pos;
  this.img = img;
  this.fun = fun;
  this.intLength = intLength;
  this.interval = setInterval(this.fun, this.intLength);
  this.show = function() {
    image(this.img, this.pos.x, this.pos.y, this.img.width, this.img.height);
  }
}

var placeThing = {
	show: function() {
		fill(255, 0, 0);
		noStroke();
		var thing = snapGrid(createVector(mouseX-transX, mouseY-transY));
		ellipse(thing.x, thing.y, 10, 10);
	}
}

function button(x, y, img) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.pclick = false;
    this.show = function() {
        image(this.img, this.x-transX, this.y-transY);
    }
    this.testClick = function() {
        if (mouseX >= this.img.width && mouseX <= this.x-transX + this.img.width && mouseIsPressed) {
            if (mouseY >= this.y-transY && mouseY <= this.y-transY + this.img.height && !this.pclick) {
                this.pclick = true;
                return true;
            } else {
                if (this.pclick && !mouseIsPressed) {
                  this.pclick = false;
                }
                return false;
            }
        } else {
            if (this.pclick && !mouseIsPressed) {
              this.pclick = false;
            }
            return false;
        }
    }
}

function buildingButton(x, y, label, price, img, fun, intLength) {
  this.selected = false;
  this.x = x;
  this.y = y;
  this.label = label;
  this.price = price;
  this.img = img;
  this.fun = fun;
  this.intLength = intLength;
  this.butthon = new button(this.x, this.y, boxy)
  this.show = function() {
    if (placing) {
      this.butthon.show();
    }
  }
}