function setup() {

  // Create the canvas to be drawn on
  createCanvas(windowWidth, windowHeight);

  // Define image
  backgroundImage = loadImage("assets/GraphTheoryImage.jpg");

}

function draw() {

  // Draw the background image as the lowest layer on each draw frame
  image(backgroundImage, 0, 0, width, height);

}
