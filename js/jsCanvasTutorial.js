// Rendering context

var canvas = document.getElementById('tutorial'); // Retrieves the node in the DOM representing canvas element

// Checking for support

if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  // Drawing code here
  else {
    // canvas-unsupported code here
  }
}
