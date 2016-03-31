/**
 * Created by Steven Gantz
 * Date: 3/16/2016
 * This file contains the object that each vertex will be
 * entered into the algorithm.
 **/
function Vertex(name, x, y, size) {

  // Attributes
  this.name = name;
  this.lit = false;
  this.touched = false;
  this.adjacentVertices = [];
  this.edgeList = [];

  // Selection attributes, only two nodes can be selected at a time
  this.selectedFirst;
  this.selectedSecond;

  // The current distance saved locally
  this.distance;

  // Host the previous node in the list
  this.previous;

  // Fscore for A*
  this.fscore;

  // Constructor
  {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  this.addAdjacent = function(adj) {
    // Add to adjacency lists
    this.adjacentVertices.push(adj);
    adj.adjacentVertices.push(this);

    // Calculate weight of edge
    var x = this.x - adj.x;
    var y = this.y - adj.y;
    var edgeWeight = Math.sqrt(x * x + y * y);

    // Create edge for each
    var thisEdge = new Edge(this, adj, edgeWeight);
    var thatEdge = new Edge(adj, this, edgeWeight);

    this.addEdge(thisEdge);
    adj.addEdge(thatEdge);
  }

  this.addEdge = function(edge) {
    this.edgeList.push(edge);
  }

  this.draw = function(mouseX, mouseY) {

    if (this.selectedFirst) {
      textSize(24);
      text(this.name, 60, 60);
    }

    if(this.selectedSecond){
      textSize(24);
      text(this.name, 60, 90);
    }

    // If mouseover display name
    if (mouseX > this.x - this.size && mouseY < this.y + this.size &&
      mouseX < this.x + this.size && mouseY > this.y - this.size){
        textSize(24);
        text("Test " + this.name, 60, 150);
      }

    fill('white');
    ellipse(this.x, this.y, this.size, this.size);
    for (i = 0; i < this.adjacentVertices.length; i++) {
      var adj = this.adjacentVertices[i];
      stroke(255);
      strokeWeight(1);
      line(this.x, this.y, adj.x, adj.y);
    }


    if (this.lit) {
      fill('green');
      ellipse(this.x, this.y, this.size, this.size);
      if (this.previous != null) {
        var adj = this.previous;
        stroke(0, 255, 0);
        strokeWeight(4);
        line(this.x, this.y, adj.x, adj.y);
      }
    } else {
      fill('red');
      ellipse(this.x, this.y, this.size, this.size);
    }

  }

  this.touch = function() {
    this.touched = true;
  }

  this.light = function() {
    this.lit = true;
  }

  this.dim = function() {
    this.lit = false;
  }

  this.checkForClick = function(mouseX, mouseY) {
    if (mouseX > this.x - this.size && mouseY < this.y + this.size &&
      mouseX < this.x + this.size && mouseY > this.y - this.size) {
      print("Selected " + this.name);
      return true;
    } else {
      return false;
    }
  }


}
