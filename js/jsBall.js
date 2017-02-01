var height = 800;
var width = 1000;
var canvas = ctx = false;
var frameRate = 1/40;
var frameDelay = frameRate * 1000;
var loopTimer = false;

var ball = {
  position: {x: width/2, y: 0},
  velocity: {x: 10, y: 0},
  mass: 0.1,    // kilograms
  radius: 15,   // 1px = 1cm, 100cm = 1m
  restitution: -1.1
};

var Cd = 0.47;  // Dimensionless
var rho = 1.22; // Density kg per volume
var A = Math.PI * ball.radius * ball.radius / (10000); // area (meters squared)
var ag = 9.81;  // Gravitational Acceleration
var mouse = {x: 0, y: 0, isDown: false};

function getMousePosition(e) {
  mouse.x = e.pageX - canvas.offsetLeft;
  mouse.y = e.pageY - canvas.offsetTop;
}

var mouseDown = function(e) {
  if (e.which == 1) { // if trigger e.which is in effect
    getMousePosition(e);
    mouse.isDown = true;
    ball.position.x = mouse.x;
    ball.position.y = mouse.y;
  }
}

var mouseUp = function(e) {
  if (e.which == 1) {
    mouse.isDown = false;
    ball.velocity.y = (ball.position.y - mouse.y) / 10;
    ball.velocity.x = (ball.position.x - mouse.x) / 10;
  }
}

var setup = function() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  canvas.onmousemove = getMousePosition;
  canvas.onmousedown = mouseDown;
  canvas.onmouseup = mouseUp;

  ctx.fillStyle = 'navy';
  ctx.strokeStyle = '#000000';
  loopTimer = setInterval(loop, frameDelay);
}

var loop = function () {
  if ( ! mouse.isDown) {
    // Do physics
    // Drag force: Fd = -0.5 * Cd * A * rho * v^2 * unit vector

    var Fx = -0.5 * Cd * A * rho * (ball.velocity.x * ball.velocity.x * ball.velocity.x) / Math.abs(ball.velocity.x);
    var Fy = -0.5 * Cd * A * rho * (ball.velocity.y * ball.velocity.x * ball.velocity.x) / Math.abs(ball.velocity.y);

    // Check: Is there a force value? If velocity is zero then our drag force
    // should not be infinity, given the drag force equations.

    Fx = (isNaN(Fx) ? 0 : Fx); // Is Fx a valid value? If not, Fx = 0. Else, Fx = Fx.
    Fy = (isNaN(Fy) ? 0 : Fy);

    // Calculate acceleration (F = ma)
    var ax = Fx / ball.mass;
    var ay = ag + (Fy / ball.mass);

    // Integrate to get velocity
    ball.velocity.x += ax * frameRate;
    ball.velocity.y += ay * frameRate;

    // Integrate to get position
    ball.position.x += ball.velocity.x * frameRate * 100;
    ball.position.y += ball.velocity.y * frameRate * 100;
}
    // Handle collisions

    if ( ball.position.y < ball.radius ) {
         ball.velocity.y *= ball.restitution;
         ball.position.y = ball.radius;
    } // Bounding a ceiling

    if ( ball.position.y > height - ball.radius ) {
         ball.velocity.y *= ball.restitution;
         ball.position.y = height - ball.radius;
    } // This was the ground.

    if ( ball.position.x > width - ball.radius ) {
         ball.velocity.x *= ball.restitution;
         ball.position.x = width - ball.radius;
    } // Right wall

    if ( ball.position.x < ball.radius ) {
         ball.velocity.x *= ball.restitution;
         ball.position.x = ball.radius;
    } // Left wall


    // Draw the ball

    ctx.clearRect(0, 0, width, height);

    ctx.save();

    ctx.translate(ball.position.x, ball.position.y);
    ctx.beginPath();
    ctx.arc(0, 0, ball.radius, 0, Math.PI*2, true);
    ctx.fill();
    ctx.closePath();

    ctx.restore();

    // Draw the slingshot

    if (mouse.isDown) {
      ctx.beginPath();
      ctx.moveTo(ball.position.x, ball.position.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
      cts.closePath();
    }
  }

setup();
