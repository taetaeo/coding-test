const solution = (graph, start) => {
  const adjList = {};

  graph.forEach(([from, to]) => {
    if (!adjList[from]) adjList[from] = [];
    adjList[from].push(to);
  });

  function dfs(current, visited, result) {
    visited.add(current);
    result.push(current);

    (adjList[current] || []).forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        dfs(neighbor, visited, result);
      }
    });
  }

  const visited = new Set();
  const result = [];

  dfs(start, visited, result);

  return result;
};
console.log(
  solution(
    [
      ["A", "B"],
      ["B", "C"],
      ["C", "D"],
      ["D", "E"],
      ["E", ""],
    ],
    "A"
  )
);
["A", "B", "C", "D", "E"];
