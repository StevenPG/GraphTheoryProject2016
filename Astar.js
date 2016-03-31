/**
 * Created by Steven Gantz
 * Date: 3/31/16
 * This file contains a javascript implementation
 * of the A* pathfinding algorithm.
 **/
function Astar(listOfVertices, debug) {

  this.debug = debug;

  this.shortestPathValue = 0;

  // Constructor, save the entire list of vertices
  {
    this.vertices = listOfVertices;
  }

  this.reconstructPath = function(current) {
    // total_path := [current]
    total_path = [];
    total_path.push(current);
    // while current in cameFrom.Keys:
    while (current != null) {
      // current := cameFrom[current]
      current.lit = true;
      current = current.previous;
      current.lit = true;
      // total_path.append(current)
      total_path.push(current);
    }

    if (this.debug) {
      totalDistance = 0;
      for (var z = 0; z < total_path.length; z++) {
        if (total_path[z] != null) {
          print(total_path[z].name);
          totalDistance = totalDistance + total_path[z].distance;
        }
      }
      print(totalDistance);
      this.shortestPathValue = totalDistance;
    }
    // return total_path
    return total_path;

  }

  this.findShortestPath = function(start, goal) {
      // The set of nodes already evaluated.
      closedSet = [];
      // The set of currently discovered nodes still to be evaluated.
      // Initially, only the start node is known.
      openSet = [start];
      // For each node, which node it can most efficiently be reached from.
      // If a node can be reached from many nodes, cameFrom will eventually contain the
      // most efficient previous step.
      // cameFrom := the empty map
      cameFrom = []

      // For each node, the cost of getting from the start node to that node.
      // gScore := map with default value of Infinity
      gScore = [];
      for (var i = 0; i < this.vertices.length; i++) {
        this.vertices[i].distance = Number.MAX_VALUE;
        this.vertices[i].previous = null;
      }

      // // The cost of going from start to start is zero.
      for (var i = 0; i < this.vertices.length; i++) {
        if (this.vertices[i].name == start.name) {
          // gScore[start] := 0
          this.vertices[i].distance = 0;
          this.vertices[i].previous = null;
        }
      }

      // For each node, the total cost of getting from the start node to the goal
      // by passing by that node. That value is partly known, partly heuristic.
      // fScore := map with default value of Infinity
      fScore = [];
      for (var i = 0; i < this.vertices.length; i++) {
        this.vertices[i].fscore = Number.MAX_VALUE;
      }

      // // For the first node, that value is completely heuristic.
      // fScore[start] := heuristic_cost_estimate(start, goal)
      var x = start.x - goal.x;
      var y = start.y - goal.y;
      var edgeWeight = Math.sqrt(x * x + y * y);
      for (var i = 0; i < this.vertices.length; i++) {
        if (this.vertices[i].name == start.name) {
          // gScore[start] := 0
          this.vertices[i].fscore = edgeWeight;
        }
      }

      // while openSet is not empty
      while (openSet.length > 0) {
        //     current := the node in openSet having the lowest fScore[] value
        minScore = Number.MAX_VALUE;
        current = null;
        for (var i = 0; i < this.vertices.length; i++) {
          if (this.vertices[i].fscore < minScore) {
            minDistance = this.vertices[i].fscore;
            current = this.vertices[i];
          }
        }

        // if current = goal
        if (current == goal) {
          // return reconstruct_path(cameFrom, goal)
          return this.reconstructPath(goal);
        }
        // openSet.Remove(current)
        index = this.vertices.indexOf(current);
        this.vertices.splice(index, 1);
        // closedSet.Add(current)
        closedSet.push(current);

        // for each neighbor of current
        for (var i = 0; i < current.adjacentVertices.length; i++) {
          // if neighbor in closedSet
          neighbor = current.adjacentVertices[i];
          for (var c = 0; c < closedSet.length; c++) {
            if (closedSet[c].name == neighbor.name) {
              continue; // Ignore the neighbor which is already evaluated.
            }
          }

          // The distance from start to a neighbor
          // tentative_gScore := gScore[current] + dist_between(current, neighbor)
          var x = current.x - neighbor.x;
          var y = current.y - neighbor.y;
          var edgeWeight = Math.sqrt(x * x + y * y);
          tentative_gScore = current.distance + edgeWeight;

          // if neighbor not in openSet	// Discover a new node
          isInSet = false;
          for (var j = 0; j < openSet.length; j++) {
            if (neighbor.name == openSet[j].name) {
              isInSet = true;
            }
          }
          if (!isInSet) {
            openSet.push(neighbor);
          } else if (tentative_gScore >= current.adjacentVertices[i].distance) {
            // else if tentative_gScore >= gScore[neighbor]
            continue; // This is not a better path.
          }

          //
          // This path is the best until now. Record it!
          //         cameFrom[neighbor] := current
          current.adjacentVertices[i].previous = current;
          //         gScore[neighbor] := tentative_gScore
          current.adjacentVertices[i].distance = tentative_gScore;
          //         fScore[neighbor] := gScore[neighbor] + heuristic_cost_estimate(neighbor, goal)
          current.adjacentVertices[i].fscore = current.adjacentVertices[i].distance;
        }
      }
    }
    // return failure
  return false;
}
