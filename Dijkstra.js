/**
 * Created by Steven Gantz
 * Date: 3/16/16
 * This file contains a javascript implementation of Dijkstra's shortest path
 * algorithm using Vertex objects.
 **/
function Dijkstra(listOfVertices, debug) {

  this.debug = debug;

  // Constructor, save the entire list of vertices
  {
    this.vertices = listOfVertices;
  }

  //this.findShortestPath = function(startingVertex, endingVertex) {
  this.findShortestPath = function(vertex, endVertex) {
    this.getSpecificPath(vertex, endVertex);
    if (debug) {
      for (i = 0; i < listOfVertices.length; i++) {
        print("Full paths: " + listOfVertices[i].name + ": " + listOfVertices[i].distance)
      }
    }

    shortestPathList = this.getShortest(endVertex);
    if (debug) {
      var pathLength = 0;

      for (i = 0; i < shortestPathList.length; i++) {
        print("Shortest path: " + shortestPathList[i].name + ": " + shortestPathList[i].distance);
        pathLength += shortestPathList[i].distance;
      }
      print("Path length: " + pathLength);
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

  this.getShortest = function(endNode) {
    S = [];
    while (endNode.previous != null) {
      S.push(endNode.previous);
      endNode = endNode.previous;
    }
    S.push(endNode);
    return S;
  }

  this.getSpecificPath = function(source, end) {
    // Get all paths
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
        }
      }

      if(vertex.name === end.name){
        print("End search at " + end.name);
        return listOfVertices;
      }

      //   14          remove u from Q
      var index = Q.indexOf(vertex);
      Q.splice(index, 1);
      //   15
      //   16          for each neighbor v of u:           // where v is still in Q.
      neighborList = vertex.adjacentVertices;
      for (var i = 0; i < neighborList.length; i++) {
        if (!this.contains(Q, neighborList[i])) {
          print("Already touched " + neighborList[i].name);
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
          neighborList[i].previous = vertex;
        }
      }
    }
    //   21
    //   22      return dist[], prev[]
    return listOfVertices;
  }

  // Get all paths
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
          print("Current node: " + vertex.name + " marking " + neighborList[i].name);
          //   17              alt ← dist[u] + length(u, v)
          var x = vertex.x - neighborList[i].x;
          var y = vertex.y - neighborList[i].y;
          var edgeWeight = Math.sqrt(x * x + y * y);
          alt = vertex.distance + edgeWeight;
          //   18              if alt < dist[v]:               // A shorter path to v has been found
          if (alt < neighborList[i].distance) {}
          //   19                  dist[v] ← alt
          print(alt);
          print(neighborList[i].name + ": " + neighborList[i].distance);
          neighborList[i].distance = alt;
          //   20                  prev[v] ← u
          neighborList[i].previous = vertex;
        }
      }
    }
    //   21
    //   22      return dist[], prev[]
    return listOfVertices;
  }
}
