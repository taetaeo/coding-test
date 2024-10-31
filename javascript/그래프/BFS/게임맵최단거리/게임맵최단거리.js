// 게임 맵 최단거리
// Queue 클래스 정의: BFS(너비 우선 탐색)에서 사용할 큐를 구현
class Queue {
  items = []; // 큐의 요소들을 저장할 배열
  front = 0; // 큐의 앞부분 인덱스 (가장 먼저 들어온 요소)
  rear = 0; // 큐의 뒷부분 인덱스 (새로 들어오는 요소가 위치할 인덱스)

  // 큐에 아이템을 추가하는 메서드
  push(item) {
    this.items.push(item); // 배열 끝에 새로운 요소를 추가
    this.rear++; // rear 인덱스를 증가시켜 다음 요소가 들어올 위치를 설정
  }

  // 큐의 가장 앞에 있는 요소를 반환하는 메서드 (제거하지 않음)
  first() {
    return this.items[this.front]; // front 인덱스에 해당하는 첫 번째 요소를 반환
  }

  // 큐의 가장 마지막에 있는 요소를 반환하는 메서드
  last() {
    return this.items[this.rear - 1]; // rear - 1 인덱스에 있는 마지막 요소를 반환
  }

  // 큐에서 가장 앞에 있는 요소를 제거하고 반환하는 메서드
  pop() {
    return this.items[this.front++]; // front 인덱스에 있는 요소를 반환하고, front 인덱스를 1 증가시킴
  }

  // 큐가 비어 있는지 확인하는 메서드
  isEmpty() {
    return this.front === this.rear; // front와 rear가 같으면 큐가 비어있음
  }
}

const maps1 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

const maps2 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
];
const solution = (maps) => {
  // 이동할 수 있는 방향을 나타내는 배열 move 선언
  const move = [
    [-1, 0], // 위쪽으로 이동 (행 번호가 1 감소)
    [0, -1], // 왼쪽으로 이동 (열 번호가 1 감소)
    [0, 1], // 오른쪽으로 이동 (열 번호가 1 증가)
    [1, 0], // 아래쪽으로 이동 (행 번호가 1 증가)
  ];

  // 맵의 크기를 저장하는 변수 선언
  const n = maps.length; // 맵의 행 개수
  const m = maps[0].length; // 맵의 열 개수

  // 거리를 저장하는 배열 dist를 -1로 초기화 (방문하지 않은 곳은 -1로 표기)
  const dist = Array.from({ length: n }, () => Array(m).fill(-1));
  console.log("dist", dist);

  // bfs 함수를 선언하여 너비 우선 탐색으로 최단 경로 탐색
  function bfs(start) {
    // queue를 선언하고 시작 위치를 queue에 추가
    const queue = new Queue();
    queue.push(start);

    // 시작 위치는 (0, 0)으로, 거리를 1로 설정
    dist[start[0]][start[1]] = 1;

    // 큐가 비어있게 될 때까지 탐색 반복
    while (!queue.isEmpty()) {
      const here = queue.pop(); // 현재 위치를 큐에서 꺼냄

      // 현재 위치에서 이동할 수 있는 모든 방향에 대해 반복
      for (const [dx, dy] of move) {
        console.log("here & dx & dy", here, dx, dy);
        const row = here[0] + dx; // 새로운 행 위치
        const column = here[1] + dy; // 새로운 열 위치

        // 이동한 위치가 맵의 범위를 벗어난 경우 다음 방향으로 넘어감
        if (row < 0 || row >= n || column < 0 || column >= m) {
          continue;
        }

        // 이동한 위치에 벽이 있거나, 이미 방문한 경우 넘어감
        if (maps[row][column] === 0 || dist[row][column] !== -1) {
          continue;
        }
        console.log("row & column 1", row, column);

        // 처음 방문하는 위치인 경우, 큐에 추가하고 거리를 갱신
        queue.push([row, column]);
        console.log("아이템", queue.items);
        console.log("dist & here", dist, here);
        dist[row][column] = dist[here[0]][here[1]] + 1; // 이전 거리에서 +1
      }
    }

    console.log("dist", dist);

    return dist;
  }

  // 시작 위치에서 bfs 함수를 호출하여 거리 계산 시작
  bfs([0, 0]);

  // 목적지까지의 거리 반환, 목적지에 도달하지 못한 경우 -1 반환
  return dist[n - 1][m - 1];
};

console.log(solution(maps1)); // maps1의 최단 경로 출력
// console.log(solution(maps2)); // maps2의 최단 경로 출력
