function setup() {

  // Create the canvas to be drawn on
  createCanvas(windowWidth, windowHeight);
  /**
    if(windowWidth < 490){
      w = 480;
      h = 270;
    } else if(windowWidth < 641){
      w = 640;
      h = 360;
    } else if(windowWidth < 750){
      w = 720;
      h = 405;
    } else if(windowWidth < 1441){
      w = 1440;
      h = 810;
    } else if(windowWidth < 1921){
      w = 1920;
      h = 1081;
    } else if(windowWidth < 2049){
      w = 2048;
      h = 1152;
    } else {
      w = windowWidth;
      h = windowHeight;
    }**/

  w = windowWidth;
  h = windowHeight;

  print(w);
  print(h);

  // Define image
  backgroundImage = loadImage("assets/GraphTheoryImage.jpg");

  // Const fields
  var vertexSize = w / 144;

  // Only 2 selections, held globally
  selectedFirst = null;
  selectedSecond = null;

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
  A2 = new Vertex("A2", w / 6.153846, h / 2.327645, vertexSize);
  DeFrancesco_EastJunction = new Vertex("DeFrancesco_EastJunction", w / 4.630225, h / 1.853261, vertexSize);
  Library_Sub_SharadinJunction = new Vertex("Library_Sub_SharadinJunction", w / 3.044397, h / 1.905028, vertexSize);
  BoehmSteps = new Vertex("BoehmSteps", w / 2.823529, h / 1.485839, vertexSize);
  GrimPond = new Vertex("GrimPond", w / 2.818004, h / 1.394683, vertexSize);

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
  vertices.push(A2);
  vertices.push(DeFrancesco_EastJunction)
  vertices.push(Library_Sub_SharadinJunction)
  vertices.push(BoehmSteps)
  vertices.push(GrimPond)

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
  Grim_BoehmJunction.addAdjacent(Boehm_Front);
  Grim_BoehmJunction.addAdjacent(LibraryFront);
  LibraryFront.addAdjacent(Sub_Front);
  LibraryFront.addAdjacent(Sub_BoehmJunction);
  LibraryFront.addAdjacent(BoehmRear);
  BoehmRear.addAdjacent(Boehm_Front);
  BoehmRear.addAdjacent(Sub_BoehmJunction);
  Sharadin_SubJunction.addAdjacent(Sub_Front);
  Sharadin_SubJunction.addAdjacent(SharadinFront);
  BeekeyFront.addAdjacent(Beekey_DeFranJunction);
  Beekey_DeFranJunction.addAdjacent(DeFrancesco_North);
  DeFrancesco_North.addAdjacent(DeFran_RickenbachJunction);
  DeFran_RickenbachJunction.addAdjacent(RickenbachFront);
  DeFran_RickenbachJunction.addAdjacent(Sub_Front);
  DeFran_RickenbachJunction.addAdjacent(DeFrancesco_EastJunction);
  DeFrancesco_EastJunction.addAdjacent(DeFrancesco_East);
  DeFrancesco_EastJunction.addAdjacent(Sub_Front);
  DeFrancesco_EastJunction.addAdjacent(DeFran_LibJunction);
  SharadinFront.addAdjacent(Library_Sub_SharadinJunction);
  Library_Sub_SharadinJunction.addAdjacent(LibraryFront);
  Library_Sub_SharadinJunction.addAdjacent(Sharadin_SubJunction);
  Library_Sub_SharadinJunction.addAdjacent(Sub_BoehmJunction);
  Boehm_Front.addAdjacent(BoehmSteps);
  BoehmSteps.addAdjacent(GrimPond);
  Grim_BoehmJunction.addAdjacent(GrimPond);
  GrimPond.addAdjacent(Grim);
  A2.addAdjacent(DeFrancesco_North);
}

function draw() {
  // Draw the background image as the lowest layer on each draw frame
  image(backgroundImage, 0, 0, w, h);

  // Draw the vertices
  drawPoints();
}

// Runs on button presss
function runDijkstraAlgorithm() {
  if (selectedFirst == null || selectedSecond == null) {
    print("Need to select nodes");
  } else {
    print("Run Dijkstra algorithm");
    algorithm = new Dijkstra(vertices, false);
    algorithm.findShortestPath(selectedFirst, selectedSecond);
  }
}

function mouseClicked() {

  // Start first click block
  if (selectedFirst == null) {
    LytleHall.selectedFirst = LytleHall.checkForClick(mouseX, mouseY);
    LytleJunction.selectedFirst = LytleJunction.checkForClick(mouseX, mouseY);
    AF.selectedFirst = AF.checkForClick(mouseX, mouseY);
    AF_LytleJunction.selectedFirst = AF_LytleJunction.checkForClick(mouseX, mouseY);
    DeFrancesco_South.selectedFirst = DeFrancesco_South.checkForClick(mouseX, mouseY);
    DeFrancesco_East.selectedFirst = DeFrancesco_East.checkForClick(mouseX, mouseY);
    DeFrancesco_North.selectedFirst = DeFrancesco_North.checkForClick(mouseX, mouseY);
    DeFran_LibJunction.selectedFirst = DeFran_LibJunction.checkForClick(mouseX, mouseY);
    Grim.selectedFirst = Grim.checkForClick(mouseX, mouseY);
    Grim_BoehmJunction.selectedFirst = Grim_BoehmJunction.checkForClick(mouseX, mouseY);
    Boehm_Front.selectedFirst = Boehm_Front.checkForClick(mouseX, mouseY);
    Lytle_DeFranJunction.selectedFirst = Lytle_DeFranJunction.checkForClick(mouseX, mouseY);
    LibraryFront.selectedFirst = LibraryFront.checkForClick(mouseX, mouseY);
    Sub_BoehmJunction.selectedFirst = Sub_BoehmJunction.checkForClick(mouseX, mouseY);
    BoehmRear.selectedFirst = BoehmRear.checkForClick(mouseX, mouseY);
    SharadinFront.selectedFirst = SharadinFront.checkForClick(mouseX, mouseY);
    Sub_Front.selectedFirst = Sub_Front.checkForClick(mouseX, mouseY);
    Sharadin_SubJunction.selectedFirst = Sharadin_SubJunction.checkForClick(mouseX, mouseY);
    LytleFrontLot.selectedFirst = LytleFrontLot.checkForClick(mouseX, mouseY);
    BeekeyFront.selectedFirst = BeekeyFront.checkForClick(mouseX, mouseY);
    Beekey_DeFranJunction.selectedFirst = Beekey_DeFranJunction.checkForClick(mouseX, mouseY);
    DeFran_RickenbachJunction.selectedFirst = DeFran_RickenbachJunction.checkForClick(mouseX, mouseY);
    RickenbachFront.selectedFirst = RickenbachFront.checkForClick(mouseX, mouseY);
    A2.selectedFirst = A2.checkForClick(mouseX, mouseY);
    DeFrancesco_EastJunction.selectedFirst = DeFrancesco_EastJunction.checkForClick(mouseX, mouseY);
    Library_Sub_SharadinJunction.selectedFirst = Library_Sub_SharadinJunction.checkForClick(mouseX, mouseY);
    BoehmSteps.selectedFirst = BoehmSteps.checkForClick(mouseX, mouseY);
    GrimPond.selectedFirst = GrimPond.checkForClick(mouseX, mouseY);

    for (i = 0; i < vertices.length; i++) {
      if (vertices[i].selectedFirst) {
        selectedFirst = vertices[i];
      }
    }
  }
  // End first click block

  // Start second click block
  if (selectedFirst != null && selectedSecond == null) {
    LytleHall.selectedSecond = LytleHall.checkForClick(mouseX, mouseY);
    LytleJunction.selectedSecond = LytleJunction.checkForClick(mouseX, mouseY);
    AF.selectedSecond = AF.checkForClick(mouseX, mouseY);
    AF_LytleJunction.selectedSecond = AF_LytleJunction.checkForClick(mouseX, mouseY);
    DeFrancesco_South.selectedSecond = DeFrancesco_South.checkForClick(mouseX, mouseY);
    DeFrancesco_East.selectedSecond = DeFrancesco_East.checkForClick(mouseX, mouseY);
    DeFrancesco_North.selectedSecond = DeFrancesco_North.checkForClick(mouseX, mouseY);
    DeFran_LibJunction.selectedSecond = DeFran_LibJunction.checkForClick(mouseX, mouseY);
    Grim.selectedSecond = Grim.checkForClick(mouseX, mouseY);
    Grim_BoehmJunction.selectedSecond = Grim_BoehmJunction.checkForClick(mouseX, mouseY);
    Boehm_Front.selectedSecond = Boehm_Front.checkForClick(mouseX, mouseY);
    Lytle_DeFranJunction.selectedSecond = Lytle_DeFranJunction.checkForClick(mouseX, mouseY);
    LibraryFront.selectedSecond = LibraryFront.checkForClick(mouseX, mouseY);
    Sub_BoehmJunction.selectedSecond = Sub_BoehmJunction.checkForClick(mouseX, mouseY);
    BoehmRear.selectedSecond = BoehmRear.checkForClick(mouseX, mouseY);
    SharadinFront.selectedSecond = SharadinFront.checkForClick(mouseX, mouseY);
    Sub_Front.selectedSecond = Sub_Front.checkForClick(mouseX, mouseY);
    Sharadin_SubJunction.selectedSecond = Sharadin_SubJunction.checkForClick(mouseX, mouseY);
    LytleFrontLot.selectedSecond = LytleFrontLot.checkForClick(mouseX, mouseY);
    BeekeyFront.selectedSecond = BeekeyFront.checkForClick(mouseX, mouseY);
    Beekey_DeFranJunction.selectedSecond = Beekey_DeFranJunction.checkForClick(mouseX, mouseY);
    DeFran_RickenbachJunction.selectedSecond = DeFran_RickenbachJunction.checkForClick(mouseX, mouseY);
    RickenbachFront.selectedSecond = RickenbachFront.checkForClick(mouseX, mouseY);
    A2.selectedSecond = A2.checkForClick(mouseX, mouseY);
    DeFrancesco_EastJunction.selectedSecond = DeFrancesco_EastJunction.checkForClick(mouseX, mouseY);
    Library_Sub_SharadinJunction.selectedSecond = Library_Sub_SharadinJunction.checkForClick(mouseX, mouseY);
    BoehmSteps.selectedSecond = BoehmSteps.checkForClick(mouseX, mouseY);
    GrimPond.selectedSecond = GrimPond.checkForClick(mouseX, mouseY);

    for (i = 0; i < vertices.length; i++) {
      if (vertices[i].selectedSecond) {
        selectedSecond = vertices[i];
      }
    }

    if (selectedFirst == selectedSecond) {
      selectedSecond = null;
    }
  }
  // End second click block

  print(selectedFirst);
  print(selectedSecond);

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
  A2.draw();
  DeFrancesco_EastJunction.draw();
  Library_Sub_SharadinJunction.draw();
  BoehmSteps.draw();
  GrimPond.draw();
}
