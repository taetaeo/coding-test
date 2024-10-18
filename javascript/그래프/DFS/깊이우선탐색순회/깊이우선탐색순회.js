// 깊이 우선 탐색 순회

const solution = (edges, startNode) => {
  // 1. 그래프를 인접 리스트(Adjacency List)로 변환
  const adjacencyList = {};

  // 인접 행렬 리스트를 만들어준다.
  edges.forEach(([fromNode, toNode]) => {
    /**
     * 'fromNode'에서 'toNode'로 가는 경로를 저장
     *
     * 경로가 없으면 빈배열을 경로가 있다면 기존에 있던 배열에 추가한다.
     */
    if (!adjacencyList[fromNode]) adjacencyList[fromNode] = [];
    adjacencyList[fromNode].push(toNode);
  });
  /**
   * 인접행렬 리스트는 다음과 같다.
   * 첫 번째 Graph : { A: [ 'B' ], B: [ 'C' ], C: [ 'D' ], D: [ 'E' ] }
   * 두 번쨰 Graph : { A: [ 'B', 'C' ], B: [ 'D', 'E' ], C: [ 'F' ], E: [ 'F' ] }
   */

  // 2. DFS(깊이 우선 탐색) 함수 정의
  function dfs(currentNode, visitedNodes, result) {
    // 현재 노드를 방문한 목록에 추가
    visitedNodes.add(currentNode); // Set(1) { 'A' }

    // 결과 배열에 현재 노드를 추가
    result.push(currentNode); // ['A']

    // 현재 노드에 인접한 노드들 순회
    (adjacencyList[currentNode] || []).forEach((neighborNode) => {
      // 인접한 노드 중 아직 방문하지 않은 노드에 대해 재귀적으로 DFS 호출
      if (!visitedNodes.has(neighborNode)) {
        dfs(neighborNode, visitedNodes, result);
      }
    });
  }

  function dfs(currentNode, visitedNodes, result) {
    // 현재 노드를 방문한 목록에 추가
    visitedNodes.add(currentNode); // 방문한 노드 기록

    // 결과 배열에 현재 노드를 추가
    result.push(currentNode); // 탐색 결과에 추가

    /**
     * 'A' 방문시 인접 노드 = [ 'B', 'C' ]
     * 'B' 방문시 인접 노드 = ['D', 'E']
     * 'D' 방문시 인접 노드 = []
     * 'E' 방문시 인접 노드 = [ 'F' ]
     * 'F' 방문시 인접 노드 = []
     * 'C' 방문시 인접 노드 = ['F']
     */

    // 현재 노드에 인접한 노드들 순회
    (adjacencyList[currentNode] || []).forEach((neighborNode) => {
      // 인접한 노드 중 아직 방문하지 않은 노드에 대해 재귀적으로 DFS 호출
      if (!visitedNodes.has(neighborNode)) {
        dfs(neighborNode, visitedNodes, result);
      }
    });
  }

  // 3. DFS 탐색 실행
  const visitedNodes = new Set(); // 방문한 노드들을 추적하기 위한 Set
  const result = []; // 탐색 순서를 저장할 배열

  // 시작 노드에서 DFS 탐색 시작
  dfs(startNode, visitedNodes, result);

  return result; // DFS 결과 (방문 순서)
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

console.log(
  solution(
    [
      ["A", "B"],
      ["A", "C"],
      ["B", "D"],
      ["B", "E"],
      ["C", "F"],
      ["E", "F"],
    ],
    "A"
  )
); // [ 'A', 'B', 'D', 'E', 'F', 'C' ]
