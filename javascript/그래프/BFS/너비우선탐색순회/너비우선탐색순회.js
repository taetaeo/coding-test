// 깊이 우선 탐색 (BFS)

// const graph1 = [(1, 2), (1, 3), (2, 4), (2, 5), (3, 6), (3, 7), (4, 8), (5, 8), (6, 9), (7, 9)];
// const graph2 = [(0, 1), (1, 2), (2, 3), (3, 4), (4, 5), (5, 0)];

const graph1 = [
  [1, 2],
  [1, 3],
  [2, 4],
  [2, 5],
  [3, 6],
  [3, 7],
  [4, 8],
  [5, 8],
  [6, 9],
  [7, 9],
];
const graph2 = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
];

// 큐(Queue) 클래스를 정의하여 BFS에서 사용할 수 있도록 함
class Queue {
  items = []; // 큐의 아이템을 저장할 배열
  front = 0; // 큐의 앞부분 인덱스
  rear = 0; // 큐의 뒷부분 인덱스

  // 큐에 아이템을 추가하는 메소드
  push(item) {
    this.items.push(item);
    this.rear++; // 뒷부분 인덱스 증가
  }

  // 큐에서 아이템을 제거하고 반환하는 메소드
  pop() {
    return this.items[this.front++]; // 앞부분의 아이템을 반환하고 인덱스 증가
  }

  // 큐가 비어있는지 확인하는 메소드
  isEmpty() {
    return this.front === this.rear; // 앞부분과 뒷부분 인덱스가 같으면 큐가 비어있음
  }
}

// BFS 알고리즘을 구현하는 함수
const solution = (graph, start) => {
  // 그래프를 인접 리스트로 변환하기 위한 객체
  const adjList = {};

  // 주어진 그래프를 순회하여 인접 리스트 생성
  for (let [u, v] of graph) {
    // u가 없으면 빈 배열로 초기화
    if (!adjList[u]) adjList[u] = [];
    // u에서 v로 가는 간선을 추가
    adjList[u].push(v);
  }

  // 방문한 노드를 저장할 Set
  const visited = new Set();

  // 탐색 시 맨 처음 방문할 노드를 큐에 추가하고 방문 처리
  const queue = new Queue();
  queue.push(start); // 시작 노드를 큐에 추가
  visited.add(start); // 시작 노드를 방문 처리
  const result = [start]; // 결과 배열에 시작 노드 추가

  // 큐가 비어 있지 않은 동안 반복
  while (!queue.isEmpty()) {
    // 큐에서 가장 먼저 들어온 노드를 Pop
    const node = queue.pop();

    // 현재 노드에 인접한 노드들을 순회
    for (let neighbor of adjList[node] || []) {
      console.log("현재 노드 : ", node);
      console.log("인접 노드들 : ", adjList[node]);
      console.log("인접 노드 :", neighbor);
      // 아직 방문하지 않은 인접 노드에 대해
      if (!visited.has(neighbor)) {
        queue.push(neighbor); // 큐에 인접 노드를 추가
        visited.add(neighbor); // 인접 노드를 방문 처리
        result.push(neighbor); // 결과 배열에 인접 노드 추가
      }
    }
    console.log("Queue", queue.items, queue.front, queue.rear);
  }

  // 탐색 결과 반환
  return result;
};

// 각 그래프에 대해 BFS 탐색 결과 출력
console.log(solution(graph1, 1)); // graph1에서 1부터 시작한 BFS 결과
console.log(solution(graph2, 1)); // graph2에서 1부터 시작한 BFS 결과
