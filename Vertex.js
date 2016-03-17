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

  // Constructor
  {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  this.addAdjacent = function(adj) {
    this.adjacentVertices.push(adj);
    adj.adjacentVertices.push(this);
  }

  this.draw = function() {
    // Draw a line between adjacentVertices
    if (this.adjacentVertices.length > 0) {
      for (i = 0; i < this.adjacentVertices.length; i++) {
        var adj = this.adjacentVertices[i];
        stroke(255);
        strokeWeight(3);
        line(this.x, this.y, adj.x, adj.y);
      }
    }

    if (!this.touched) {
      fill('white');
      ellipse(this.x, this.y, this.size, this.size);
      return;
    } else {

      if (this.lit) {
        fill('green');
        ellipse(this.x, this.y, this.size, this.size);
        return;
      } else {
        fill('red');
        ellipse(this.x, this.y, this.size, this.size);
        return;
      }

      if (this.touched) {
        fill('white');
        ellipse(this.x, this.y, this.size, this.size);
        return;
      }
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

}
