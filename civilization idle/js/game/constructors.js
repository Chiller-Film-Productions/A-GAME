function building(x, y, img, fun, intLength) {
  this.x = x;
  this.y = y;
  this.img = img;
  this.fun = fun;
  this.intLength = intLength;
  this.interval = setInterval(this.fun, this.intLength);
  this.show = function() {
    image(this.img, this.x, this.y, this.img.width, this.img.height);
  }
}
