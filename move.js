/*
 * ASTB PBM Practice
 * Written in 2020 by Tanner Wilson <tanner.mike.wilson@gmail.com>
*/

let target; // declare global target object
let targetimg;
let crosshair;
let crosshairimg;
var cnv; // declare global canvas target

//values used for target movement
let dPos;
let speed;
let startTime = new Date();
let distToEdge;

// values used in gamepad code functionality
var haveEvents = 'GamepadEvent' in window;
var haveWebkitEvents = 'WebKitGamepadEvent' in window;
var controllers = {};
var rAF = window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.requestAnimationFrame;

function preload(){
    targetimg = loadImage('images/newtarget.PNG');
    crosshairimg = loadImage('images/cross.png');
}

function setup() {
  cnv = createCanvas(windowWidth * 0.75, windowHeight * 0.75); 
  cnv.parent('canvas-holder');
  while (controllers.length == 0){
      //wait for controller to be connected
  } 
  target = new Target();
  newPos();
  speed = random(100, 200);
  crosshair = new Crosshair();
}

function draw() {
    background(0,0,0);
    distToEdge = Math.min(target.pos.x, (width - target.pos.x - 50), target.pos.y, (height - target.pos.y - 30));

    crosshair.display();

    if (new Date() - startTime > 3000 || distToEdge < 30){
      newPos();
      startTime = new Date();
    }

    target.move(dPos);
    target.display();
}

function newPos(){
  dPos = createVector(random(0, width), random(0, height)).sub(target.pos);
  speed = random(200, 300);
  dPos.mult(1/speed);
}

if (haveEvents) {
  window.addEventListener("gamepadconnected", connecthandler);
  window.addEventListener("gamepaddisconnected", disconnecthandler);
} else if (haveWebkitEvents) {
  window.addEventListener("webkitgamepadconnected", connecthandler);
  window.addEventListener("webkitgamepaddisconnected", disconnecthandler);
} else {
  setInterval(scangamepads, 500);
}