function setup() {

  // Create the canvas to be drawn on
  createCanvas(windowWidth, windowHeight);
  print(windowWidth);
  print(windowHeight);
  w = windowWidth;
  h = windowHeight;

  // Define image
  backgroundImage = loadImage("assets/GraphTheoryImage.jpg");

  // Const fields
  var vertexSize = w / 144;

  // Hold all vertices
  vertices = [];

  // Create buttons
  DijkstraButton = createButton("Dijkstra's Algorithm");
  DijkstraButton.position(w / 1.107692308692308, h / 1.091666666666667);
  DijkstraButton.mousePressed(runDijkstraAlgorithm);

  // Assign adjacentVertices
  LytleHall = new Vertex("LytleHall", w / 4.96551724137931, h / 1.222429906542056, vertexSize);
  LytleJunction = new Vertex("LytleJunction", w / 4.96551724137931, h / 1.33469387755102, vertexSize);
  AF = new Vertex("AF", w / 3.272727272727273, h / 1.3625, vertexSize);
  AF_LytleJunction = new Vertex("AF_LytleJunction", w / 4.056338028169014, h / 1.435616438356164, vertexSize);
  DeFrancesco_South = new Vertex("DeFrancesco_South", w / 4.96551724137931, h / 1.663492063492063, vertexSize);
  DeFrancesco_East = new Vertex("DeFrancesco_East", w / 4.931506849315068, h / 1.78839590443686, vertexSize);
  DeFrancesco_North = new Vertex("DeFrancesco_North", w / 5.49618320610687, h / 1.800687285223368, vertexSize);
  DeFran_LibJunction = new Vertex("DeFran_LibJunction", w / 4.444444444444444, h / 1.718032786885246, vertexSize);
  Grim = new Vertex("Grim", w / 2.722117202268431, h / 1.293927160493827, vertexSize);
  Grim_BoehmJunction = new Vertex("Grim_BoehmJunction", w / 2.926829268292683, h / 1.427792915531335, vertexSize);
  Boehm_Front = new Vertex("Boehm_Front", w / 2.8125, h / 1.532163742690058, vertexSize);
  Lytle_DeFranJunction = new Vertex("Lytle_DeFranJunction", w / 5.49618320610687, h / 1.587878787878788, vertexSize);
  LibraryFront = new Vertex("LibraryFront", w / 3.495145631067961, h / 1.647798742138365, vertexSize);
  Sub_BoehmJunction = new Vertex("Sub_BoehmJunction", w / 2.975206612, h / 1.782312925, vertexSize);
  BoehmRear = new Vertex("BoehmRear", w / 2.88, h / 1.674121406, vertexSize);
  SharadinFront = new Vertex("SharadinFront", w / 2.742857143, h / 2.079365079, vertexSize);
  Sub_Front = new Vertex("Sub_Front", w / 3.923705722, h / 2.112903226, vertexSize);
  Sharadin_SubJunction = new Vertex("Sharadin_SubJunction", w / 3.171806167, h / 2.031007752, vertexSize);
  LytleFrontLot = new Vertex("LytleFrontLot", w / 5.76, h / 1.297029703, vertexSize);
  BeekeyFront = new Vertex("BeekeyFront", w / 6.82464455, h / 1.845070423, vertexSize);
  Beekey_DeFranJunction = new Vertex("Beekey_DeFranJunction", w / 6.050420168, h / 1.776271186, vertexSize);
  DeFran_RickenbachJunction = new Vertex("DeFran_RickenbachJunction", w / 4.736842105, h / 1.940740741, vertexSize);
  RickenbachFront = new Vertex("RickenbachFront", w / 4.914675768, h / 2.096, vertexSize);

  // Build vertex list
  vertices.push(LytleHall);
  vertices.push(LytleJunction);
  vertices.push(AF);
  vertices.push(AF_LytleJunction);
  vertices.push(DeFrancesco_South);
  vertices.push(DeFrancesco_East);
  vertices.push(DeFrancesco_North);
  vertices.push(DeFran_LibJunction);
  vertices.push(Grim);
  vertices.push(Grim_BoehmJunction);
  vertices.push(Boehm_Front);
  vertices.push(Lytle_DeFranJunction);
  vertices.push(LibraryFront);
  vertices.push(Sub_BoehmJunction);
  vertices.push(BoehmRear);
  vertices.push(SharadinFront);
  vertices.push(Sub_Front);
  vertices.push(Sharadin_SubJunction);
  vertices.push(LytleFrontLot);
  vertices.push(BeekeyFront);
  vertices.push(Beekey_DeFranJunction);
  vertices.push(DeFran_RickenbachJunction);
  vertices.push(RickenbachFront);


  // Build adjacentVertices (Goes both ways)
  LytleHall.addAdjacent(LytleJunction);

  LytleJunction.addAdjacent(AF_LytleJunction);
  LytleJunction.addAdjacent(Lytle_DeFranJunction);
  LytleJunction.addAdjacent(LytleFrontLot);

  Lytle_DeFranJunction.addAdjacent(DeFrancesco_South);
  Lytle_DeFranJunction.addAdjacent(Beekey_DeFranJunction);

  DeFrancesco_South.addAdjacent(DeFran_LibJunction);

  DeFran_LibJunction.addAdjacent(AF_LytleJunction);

  AF_LytleJunction.addAdjacent(AF);

  AF.addAdjacent(Grim_BoehmJunction);
  AF.addAdjacent(LibraryFront);

  Grim_BoehmJunction.addAdjacent(Grim);
  Grim_BoehmJunction.addAdjacent(Boehm_Front);
  Grim_BoehmJunction.addAdjacent(LibraryFront);

  LibraryFront.addAdjacent(Sub_Front);
  LibraryFront.addAdjacent(Sub_BoehmJunction);
  LibraryFront.addAdjacent(BoehmRear);
  LibraryFront.addAdjacent(SharadinFront);

  BoehmRear.addAdjacent(Boehm_Front);
  BoehmRear.addAdjacent(Sub_BoehmJunction);

  Sub_BoehmJunction.addAdjacent(Sharadin_SubJunction);

  Sharadin_SubJunction.addAdjacent(Sub_Front);
  Sharadin_SubJunction.addAdjacent(SharadinFront);

  BeekeyFront.addAdjacent(Beekey_DeFranJunction);

  Beekey_DeFranJunction.addAdjacent(DeFrancesco_North);

  DeFrancesco_North.addAdjacent(DeFran_RickenbachJunction);

  DeFran_RickenbachJunction.addAdjacent(RickenbachFront);
  DeFran_RickenbachJunction.addAdjacent(DeFran_LibJunction);
  DeFran_RickenbachJunction.addAdjacent(Sub_Front);
  DeFran_RickenbachJunction.addAdjacent(DeFrancesco_East);

  DeFrancesco_East.addAdjacent(Sub_Front);
}

function draw() {
  // Draw the background image as the lowest layer on each draw frame
  image(backgroundImage, 0, 0, width, height);

  // Draw the vertices
  drawPoints();
}

// Runs on button presss
function runDijkstraAlgorithm() {
  print("Run Dijkstra algorithm");
  algorithm = new Dijkstra(vertices);
  algorithm.findShortestPath();
}

// Draw each of the points onto the image
function drawPoints() {
  // Draw points
  LytleHall.draw();
  LytleJunction.draw();
  AF.draw();
  AF_LytleJunction.draw();
  DeFrancesco_South.draw();
  DeFrancesco_East.draw();
  DeFrancesco_North.draw();
  DeFran_LibJunction.draw();
  Grim.draw();
  Grim_BoehmJunction.draw();
  Boehm_Front.draw();
  Lytle_DeFranJunction.draw();
  LibraryFront.draw();
  Sub_BoehmJunction.draw();
  BoehmRear.draw();
  SharadinFront.draw();
  Sub_Front.draw();
  Sharadin_SubJunction.draw();
  LytleFrontLot.draw();
  BeekeyFront.draw();
  Beekey_DeFranJunction.draw();
  DeFran_RickenbachJunction.draw();
  RickenbachFront.draw();
}
