<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Bouncing Ball with Edge Detection</title>
  <style>
    #ball {
      z-index: 5;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: black;
    }
  </style>
</head>
<body>
  <div id="ball"></div>

  <script>
    // Set global variables for the ball element, velocity, position, and edge boundaries
    var ball = document.getElementById("ball");
    var velocity = 10; // Initial velocity
    var positionX = 0; // Initial x-axis position
    var positionY = 0; // Initial y-axis position
    var reverseX = false; // Flag for reversing x-axis ball direction
    var reverseY = false; // Flag for reversing y-axis ball direction
    var Xmin = 0; // Left edge boundary
    var Xmax = window.innerWidth - ball.offsetWidth; // Right edge boundary
    var Ymin = 0; // Top edge boundary
    var Ymax = window.innerHeight - ball.offsetHeight; // Bottom edge boundary

    // Function to move the ball and reverse its direction when it reaches the edge boundaries
    function moveBall() {
      // Update the position of the ball on the x-axis based on the value of reverseX
      if (!reverseX) {
        // Move the ball from left to right
        positionX += velocity;
      } else {
        // Move the ball from right to left
        positionX -= velocity;
      }

      // Update the position of the ball on the y-axis based on the value of reverseY
      if (!reverseY) {
        // Move the ball from top to bottom
        positionY += velocity;
      } else {
        // Move the ball from bottom to top
        positionY -= velocity;
      }

      // Check if the ball has reached the edge boundaries on the x-axis
      if (positionX >= Xmax || positionX <= Xmin) {
        // Reverse the direction on the x-axis by switching the value of reverseX
        reverseX = !reverseX;
      }

      // Check if the ball has reached the edge boundaries on the y-axis
      if (positionY >= Ymax || positionY <= Ymin) {
        // Reverse the direction on the y-axis by switching the value of reverseY
        reverseY = !reverseY;
      }

      // Set the position of the ball
      ball.style.left = positionX + "px";
      ball.style.top = positionY + "px";
    }

    // Call the moveBall function every 100 milliseconds
    setInterval(moveBall, 100);
  </script>
</body>
</html>