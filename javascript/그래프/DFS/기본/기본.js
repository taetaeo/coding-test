// 1. 주어진 그래프에서 특정 노드부터 시작하여 DFS를 사용해 모든 노드를 탐색하시오.

/**
    1 -- 2 -- 4
    |    |
    3    5 -- 6
 */
// 2. 위와 같은 그래프를 인접 리스트 형식으로 표현하면 다음과 같습니다
const graph = {
  1: [2, 3],
  2: [1, 4, 5],
  3: [1],
  4: [2],
  5: [2, 6],
  6: [5],
};
// Set을 사용한 경우
function dfs1(graph, start) {
  const visited = new Set(); // 방문한 노드를 저장하는 집합

  function explore(node) {
    if (visited.has(node)) return; // 이미 방문한 노드면 종료
    visited.add(node); // 노드를 방문
    console.log(node); // 현재 노드 출력 (탐색 경로 확인)

    for (let neighbor of graph[node]) {
      explore(neighbor); // 인접한 노드 재귀적으로 탐색
    }
  }

  explore(start);
}

console.log(dfs1(graph, 1));
/**
 출력: 
    1
    2
    4
    5
    6
    3

 */

// 배열인 경우
function dfs2(graph, start) {
  const visited = []; // 방문한 노드를 저장하는 배열

  function explore(node) {
    if (visited.includes(node)) return; // 이미 방문한 노드라면 종료
    visited.push(node); // 방문한 노드 저장
    console.log(node); // 현재 노드 출력

    for (let neighbor of graph[node]) {
      explore(neighbor); // 재귀적으로 인접 노드 탐색
    }
  }

  explore(start);
}

console.log(dfs2(graph, 1));
