/*
 * ASTB PBM Practice
 * Written in 2020 by Tanner Wilson <tanner.mike.wilson@gmail.com>
*/

let target; // declare global target object
let targetimg;
let crosshair;
let crosshairimg;
var cnv; // declare global canvas target

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
  crosshair = new Crosshair();
}

function draw() {
    background(0,0,0);
    crosshair.display();
    target.display();
    if (dist(crosshair.x + 25, crosshair.y + 25, target.pos.x + 25, target.pos.y + 12) < 50) {
        target.respawn();
    }
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


