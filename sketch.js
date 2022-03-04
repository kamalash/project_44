var canvas;
var background
var database, gameState;
var form, player, playerCount;


function preload() {
 backgroundImage = loadImage("./assets/road.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
}

function draw() {
  background(backgroundImage);

 // text("Battle Ground",120,15)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
