## 1. 그래프란?

그래프는 `노드(vertex)`와 `간선(edge)`를 이용한 비선형 데이터 구조이다. **_그래프는 데이터 간의 관계를 표현하는데 사용이 된다._** **데이터**를 노드로, 노드 간의 **관계**나 **흐름**을 간선으로 표현한다. 간선은 방향이 있을 수 도 있고, 없을 수 도 있다. 만약 관계나 흐름에서 정도를 표현할 필요가 있다면 **가중치**라는 개념을 추가하여 표현하기도 한다.

![그래프](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbhNmyQ%2FbtsbPWs4YSk%2FcQ2n0nwVwZ7KdeOQI1hKEk%2Fimg.png)

출처 : https://dokuny-devlog.tistory.com/22

그림에서 동그라미로 표현한 것이 노드, 화살표로 표현한 것이 간선, 간선 위에 숫자로 표현한 것이 가중치이다. 즉, 노드에는 어떤 데이터가 들어 있으며, 노드 사이에 있는 것이 간선이다.

### 1.1) 그래프의 특징과 종류

> 그래프는 **방향성, 가중치 순환 특성**에 따라 종류를 구분할 수 있다.

1. **흐름을 표현하는 방향성** : 간선은 방향을 가질 수도 있고 없을 수도 있다. 방향이 있는 간선을 포함하면 방향 그래프, 방향이 없는 간선을 포함하면 무방향 그래프라고 한다.

2. **흐름의 정도를 표현하는 가중치** : 어떤 데이터는 흐름의 방향뿐 아니라 양도 중요할 수 이싿. 그런 정도를 간선에 표현할 때 이를 가중치라하고, 가중치가 있는 그래프를 **가중치 그래프**라고 한다.

3. **시작과 끝의 연결 여부를 보는 순환** : 순환은 특정 노드에서 시작해 간선을 따라 다시 돌아오는 경로가 있는 것을 말한다. 순환이 존재하는 그래프를 **순환 그래프**라고 하며, 순환이 존재하지 않는 것을 **비순환 그래프**라고 한다.

### 1.2) 그래프 구현

> 서울에서 부산으로 유동 인구 8,000명이 발생했다는 내용을 그래프로 표현하면?

- 데이터를 담고 있는 **노드** : 서울, 부산
- 노드를 잇는 **간선** : 서울과 부산의 연결 유무
- 간선의 **방향** : 서울에서 부산 방향으로
- 간선의 **가중치** : 유동 인구 8,000명

### 1.3) 인접 행렬 그래프 표현

인접행렬은 **2차원 배열**을 활용하여 구현하는 경우가 많다. 이때 배열의 인덱스는 **노드**, 배열의 값은 **노드의 가중치**로 생각한다. 인덱스의 세로 방향을 **출발 노드**, 가로 방향을 **도착 노드**로 표현할 수 있다.

> 서울(0)에서 부산(1)로 형하는 가중치가 400(km)인 그래프를 표현한다면?

|     |  0  |  1  |
| :-: | :-: | :-: |
|  0  |  -  | 400 |
|  1  |  -  |  -  |

### 1.4) 인접 리스트 그래프 효현

인접 리스트로 그래프를 표현하려면 적절한 노드를 정의해야한다. 이때, **값(v), 가중치(w), 노드(next)** 를 묶어 관리한다.

### 1.5) 인접 행렬과 인접 리스트의 장단점

1. 인접 행렬의 장단점

   인접 행렬은 크게 두 가지 단점이 있다. 1) 인접 행렬로 희소 그래프를 표현하는 경우이다. 이때, 희소그래프는 노드 수에 비해 간선 수가 매우 적은 그래프를 말한다. 2) 노드들의 값의 차이가 매우 큰 그래프를 표현하는 경우

2. 인접 리스트의 장단점

   인접 리스트는 인접 행렬과 정반대의 장단점을 가진다. 인접 리스트는 실제 연결된 노드에 대해서만 노드의 값을 노드에 담아 연결하기만 하면 된다. 물론, 최악의 경우 각 노드에서 모든 노드에 간선이 연결되어 있을 때는 효율이 떨어질 수 있지만, 그런 경우는 드물다. **보통은 인접 리스트틀 활용하면 메모리를 아낄 수 있다.**

요약하자면,

    |             | 메모리 사용 | 시간복잡도 |          기타          |
    | :---------: | :---------: | :--------: | :--------------------: |
    |  인접 행렬  |   O(N^2)    |    O(1)    | 구현이 상대적으로 쉬움 |
    | 인접 리스트 |   O(N+M)    |    O(M)    |    M은 간선의 개수     |

그래프 문제를 풀 때는 인접 행렬과 인접 리스트 방식 중 더 좋은 것을 선택해야 하지만, 보통은 시간 제약에서 장점을 위해 **인접 행렬** 방식으로 그래프 문제를 푸는 경우가 많다.

> **_문제에서 노드 개수가 1,000개 미만으로 주어지는 경우에는 인접 행렬을 사용하면 된다._**

## 2. 그래프 탐색

자료구조에서 데이터를 어떻게 구축할지 고민한다면, 알고리즘에서는 자료구조에서 어떤 순서 방식으로 탐색할지를 고민한다. 그래프에서 경로를 찾는다고 할 때 경로를 찾는 방법은 다음과 같이 크게 2가지가 있다.

1. **깊이 우선 탐색 :** 더 이상 탐색할 노드가 없을 때까지 일단 간다. 그러다가 더 이상 탐색할 노드가 없으면 최근에 방문했던 노드로 되돌아간 다음 가지 않은 노드를 방문한다.

2. **너비 우선 탐색:** 현재 위치에서 가장 가까운 노드부터 모두 방문하고 다음 노드로 넘어간다. 그 노드에서 다시 가장 가까운 노드부터 모두 방문한다.

### 2.1) 깊이 우선 탐색(DFS) => 스택을 활용

깊이 우선 탐색(DFS)는 시작 노드부터 탐색을 시작하여 간선을 따라 최대 깊이 노드까지 이동하며 차례대로 방문한다. 최대 깊이 노드까지 방문한 다음에는 이전에 방문한 노드를 거슬러 올라가며 해당 노드와 연결된 노드 중 방문하지 않은 노드로 다시 최대 깊이까지 차례대로 방문한다.

탐색을 위해서 1) 시작 노드를 정하고, 스택에 노드를 푸시한다. 스택에 있는 노드는 아직 방문하지 않았지만 방문할 예정인 노드이다. 그다음 다음과 같은 과정을 반복한다.

- 진행1 : 스택이 비어있는지 확인한다. (스택이 비어 있다면, 방문할 수 있는 모든 노드를 방문했음을 의미한다.)

  따라서, 스택이 비어있다면 탐색을 종료한다.

- 진행2 : 스택에서 노드를 `pop` 한다. 팝한 원소는 최근에 스택에 푸시한 노드이다.
- 진행3: 팝한 노드의 방문 여부를 확인한다. 이미 방문한 노드라면 별도의 처리가 없다. 아직 방문하지 않았다면 노드를 방문 처리한다.
- 진행4 : 방문한 노드와 인접한 모든 노드를 확인한다. 그리고 그 중에서 아직 방문하지 않은 노드를 스택에 푸시한다. 스택은 `LIFO` 구조이므로 방문 순소를 오름차순으로 고려한다면 역순으로 푸시해야 한다.

- 고려1: 탐색할 노드가 없을 떄까지 간선을 타고 내려갈 수 있어야한다.
- 고려2: **가장 최근에 방문한 노드**를 알아야 한다.
- 고려3: 이미 방문한 노드인지 확인할 수 있어야 한다.

깊이 우선 탐색의 핵심은 **가장 깊은 노드까지 방문한 후에 더 이상 방문할 노드가 없으면 최근 방문한 노드로 돌아온 다음, 해당 노드에엇 방문할 노드가 있는지 확인한다.**

### 2.2) 너비 우선 탐색(BFS) => 큐를 활용

- 진행1: 큐가 비어있는지 확인한다. 큐가 비어있다면, 모든 노드를 방문했다는 의미이므로 탐색을 종료
- 진행2: 큐에서 노드를 팝한다.
- 진행3: 팝한 노드와 인접한 모든 노드를 확인하고 그 중 아직 방문하지 않은 노들르 큐에 푸시하여 방문처리한다.

### 2.3) 깊이 우선 탐색과 너비 우선 탐색의 비교

**깊이 우선 탐색은 깊게 탐색 후 되돌아오는 특성이 있고, 너비 우선 탐색은 시작 노드에서 인접한 노드부터 방문하는 특성이 있다.**

깊이 우선 탐색은 더이상 탐색할 수 없으면 백트리킹하여 최근 방문 노드부터 다시 탐색을 진행한다는 특성이 있기 때문에, 백트래킹 알고리즘, 그래프의 사이크를 감지해야 하는 경우에 활용된다. 코딩테스트의 경우 보통 `최단 경로 찾는 문제`가 아니면 깊이 우선 탐색을 우선 고려하는 것이 좋다.
