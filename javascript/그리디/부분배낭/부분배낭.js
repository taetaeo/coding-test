const items = [
  [10, 19],
  [7, 10],
  [6, 10],
];
const weightLimit = 15;

/**
 * 각 물건의 단위 무게당 가치를 계산하여 items 배열에 추가
 */
function calculateUnitValue(items) {
  for (let i = 0; i < items.length; i++) {
    items[i].push(items[i][1] / items[i][0]);
  }
  return items;
}

/**
 * 단위 무게당 가치가 높은 순으로 물건을 정렬
 * 이때 비교 대상은 items 배열 요소의 index가 2인 맨마지막 요소이다
 */

function sortByUnitValue(items) {
  items.sort((a, b) => b[2] - a[2]);
  return items;
}

/**
 * 배낭의 무게 한도내에서 담을 수 있는 물건들의 최대 가치를 반환
 */

function knapsack(items, wightLimit) {
  let totalValue = 0; // 선택한 물건들의 총 가치
  let remainingWeight = wightLimit; // 남은 무게 한도

  // 물건 선택
  for (let i = 0; i < items.length; i++) {
    if (items[i][0] >= remainingWeight) {
      // 남은 무게 한도 내에서 물건을 통째로 선택
      totalValue += items[i][1];
      remainingWeight -= items[i][0];
    } else {
      // 남은 무게 한도가 물건의 무게보다 작으면 쪼개서 일부분만 선택
      const fraction = remainingWeight / items[i][0];
      totalValue += items[i][1] * fraction;
      break; // 이미 배낭의 무게 한도를 모두 사용한 경우.
    }
  }

  return totalValue;
}

function solution(items, weightLimit) {
  items = calculateUnitValue(items);
  items = sortByUnitValue(items);

  // 배낭의 무게 한도내에서 담을 수 있는 물건들의 최대 가치를 반환
  return knapsack(items, weightLimit);
}

console.log(solution(items, weightLimit));
