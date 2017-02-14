// JavaScript Ball Practice

var height = 800;
var width = 1000;
var canvas = ctx = false;
var frameRate = 1/40;
var frameDelay = frameRate * 1000;
var loopTimer = false;

var ball = {
  position: { x: width/2, y: 0 },
  velocity: { x: 10, y: 0},
  mass: 0.1, // kg
  radius: 15, // 1px = 1cm, 100cm = 1m
  restitution: -0.8
};

var Cd = -0.05; // Dimensionless
var rho = 1.22; // Density--kg per vol
var A = Math.PI * ball.radius * ball.radius / (10000) // area (meters squared)
var ag = 9.81; // grav. Acceleration
var mouse = {x: 0, y: 0, isDown: false};

function getMousePosition(e) {
  mouse.x = e.pageX = 
}
