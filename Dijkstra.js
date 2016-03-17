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

  this.findShortestPath = function(startingVertex, endingVertex) {

  }

  // PseudoCode
  /**
   *  2: for each vertex v in Graph: // Initialization
   *  3: dist[v]: = infinity // initial distance from source to vertex v is set to infinite
   *  4: previous[v]: = undefined // Previous node in optimal path from source
   *  5: dist[source]: = 0 // Distance from source to source
   *  6: Q: = the set of all nodes in Graph // all nodes in the graph are unoptimized - thus are in Q
   *  7: while Q is not empty: // main loop
   *  8: u: = node in Q with smallest dist[]
   *  9: remove u from Q
   *  10: for each neighbor v of u: // where v has not yet been removed from Q.
   *  11: alt: = dist[u] + dist_between(u, v)
   *  12: if alt < dist[v] // Relax (u,v)
   *  13: dist[v]: = alt
   *  14: previous[v]: = u
   *  15: return previous[]
   **/
}
