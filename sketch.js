function setup() {

  // Create the canvas to be drawn on
  createCanvas(windowWidth, windowHeight);
  print(windowWidth);
  print(windowHeight);
  w = windowWidth;
  h = windowHeight;
  // Define image
  backgroundImage = loadImage("assets/GraphTheoryImage.jpg");

  var vertexSize = w / 144;

  vertices = [];

  // Assign adjacentVertices
  LytleHall = new Vertex("LytleHall", w / 4.96551724137931, h / 1.222429906542056, 10);
  LytleJunction = new Vertex("LytleJunction", w / 4.96551724137931, h / 1.33469387755102, 10);
  AF = new Vertex("AF", w / 3.272727272727273, h / 1.3625, 10);
  AF_LytleJunction = new Vertex("AF_LytleJunction", w / 4.056338028169014, h / 1.435616438356164, 10);
  DeFrancesco_South = new Vertex("DeFrancesco_South", w / 4.96551724137931, h / 1.663492063492063, 10);
  DeFran_LibJunction = new Vertex("DeFran_LibJunction", 324, 305, 10);
  Grim = new Vertex("Grim", 529, 405, 10);
  Grim_BoehmJunction = new Vertex("Grim_BoehmJunction", 492, 367, 10);
  Boehm_Front = new Vertex("Boehm_Front", 512, 342, 10);
  Lytle_DeFranJunction = new Vertex("Lytle_DeFranJunction", 262, 330, 10);

  // Build vertex list
  vertices.push(LytleHall);
  vertices.push(LytleJunction);
  vertices.push(AF);
  vertices.push(AF_LytleJunction);
  vertices.push(DeFrancesco_South);
  vertices.push(DeFran_LibJunction);
  vertices.push(Grim);
  vertices.push(Grim_BoehmJunction);
  vertices.push(Boehm_Front);
  vertices.push(Lytle_DeFranJunction);

  // Build adjacentVertices (Goes both ways)
  LytleHall.addAdjacent(LytleJunction);

  LytleJunction.addAdjacent(AF_LytleJunction);
  LytleJunction.addAdjacent(Lytle_DeFranJunction);

  Lytle_DeFranJunction.addAdjacent(DeFrancesco_South);

  DeFrancesco_South.addAdjacent(DeFran_LibJunction);

  DeFran_LibJunction.addAdjacent(AF_LytleJunction);

  AF_LytleJunction.addAdjacent(AF);

  AF.addAdjacent(Grim_BoehmJunction);

  Grim_BoehmJunction.addAdjacent(Grim);
  Grim_BoehmJunction.addAdjacent(Boehm_Front);

}

function draw() {
  // Draw the background image as the lowest layer on each draw frame
  image(backgroundImage, 0, 0, width, height);

  drawPoints();
}

function drawPoints() {
  // Draw points
  LytleHall.draw();
  LytleJunction.draw();
  AF.draw();
  AF_LytleJunction.draw();
  DeFrancesco_South.draw();
  DeFran_LibJunction.draw();
  Grim.draw();
  Grim_BoehmJunction.draw();
  Boehm_Front.draw();
  Lytle_DeFranJunction.draw();
}
