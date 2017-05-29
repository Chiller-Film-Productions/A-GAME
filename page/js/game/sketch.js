function setup() {
  getData();
  setInterval('saveData()', 5000);
  createCanvas(1080, 720);
  background(0);
}