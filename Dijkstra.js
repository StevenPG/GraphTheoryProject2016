/**
 * Created by Steven Gantz
 * Date: 3/16/16
 * This file contains a javascript implementation of Dijkstra's shortest path
 * algorithm using Vertex objects.
 **/
function Dijkstra(listOfVertices) {

  // Constructor, save the entire list of vertices
  {
    this.vertices = listOfVertices;
  }

  //this.findShortestPath = function(startingVertex, endingVertex) {
  this.findShortestPath = function() {
    this.getPaths(listOfVertices[0]);
    for (i = 0; i < listOfVertices.length; i++) {
      print(listOfVertices[i].name + ": " + listOfVertices[i].distance)
    }

  }

  this.contains = function(a, obj) {
    for (var i = 0; i < a.length; i++) {
      if (a[i] === obj) {
        return true;
      }
    }
    return false;
  }

  // NOTE: Source is lytle hall temporarily
  this.getPaths = function(source) {
    //    1  function Dijkstra(Graph, source):
    //    2
    //    3      create vertex set Q
    Q = []
      //    4
      //    5      for each vertex v in Graph:             // Initialization
    for (var i = 0; i < listOfVertices.length; i++) {
      //    6          dist[v] ← INFINITY                  // Unknown distance from source to v
      listOfVertices[i].distance = Number.MAX_VALUE;
      //    7          prev[v] ← UNDEFINED                 // Previous node in optimal path from source
      listOfVertices[i].previous = null;
      //    8          add v to Q                          // All nodes initially in Q (unvisited nodes)
      Q.push(listOfVertices[i]);
      //    9
    }
    //   10      dist[source] ← 0                        // Distance from source to source
    source.distance = 0;
    //   11
    //   12      while Q is not empty:
    while (Q.length != 0) {
      //   13          u ← vertex in Q with min dist[u]    // Source node will be selected first
      var minDistance = Number.MAX_VALUE;
      for (var i = 0; i < Q.length; i++) {
        if (Q[i].distance < minDistance) {
          vertex = Q[i];
          print(vertex.name);
        }
      }
      //   14          remove u from Q
      var index = Q.indexOf(vertex);
      Q.splice(index, 1);
      //   15
      //   16          for each neighbor v of u:           // where v is still in Q.
      neighborList = vertex.adjacentVertices;
      for (var i = 0; i < neighborList.length; i++) {
        if (!this.contains(Q, neighborList[i])) {
          continue;
        } else {
          //   17              alt ← dist[u] + length(u, v)
          var x = vertex.x - neighborList[i].x;
          var y = vertex.y - neighborList[i].y;
          var edgeWeight = Math.sqrt(x * x + y * y);
          alt = vertex.distance + edgeWeight;
          //   18              if alt < dist[v]:               // A shorter path to v has been found
          if (alt < neighborList[i].distance) {}
          //   19                  dist[v] ← alt
          neighborList[i].distance = alt;
          //   20                  prev[v] ← u
          neighborList.previous = vertex;
        }
      }
    }
    //   21
    //   22      return dist[], prev[]
    return listOfVertices;
  }
}
