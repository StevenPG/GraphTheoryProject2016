/**
 * Created by Steven Gantz
 * Date: 3/16/16
 * This file contains an object that contains the distance between two vertices.
 **/
function Edge(vertexA, vertexB, weight) {
  //Default Constructor
  {
    this.vertexAName = vertexA.name;
    this.vertexA = vertexA;
    this.vertexBName = vertexB.name;
    this.vertexB = vertexB;
    this.weight = weight;
  }
}
