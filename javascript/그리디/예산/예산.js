function solution(d, budget) {
  // 배열 d를 오름차순 정렬
  d.sort((a, b) => a - b);

  // 지원할 수 있는 부서의 개수를 세는 변수
  let count = 0;

  for (const amount of d) {
    if (budget < amount) {
      // 남은 예산이 신청한 금액보다 작으면 더 이상 지원할 수 없으므로 종료
      break;
    }
    // 예산에서 신청한 금액을 차감
    budget -= amount;
    count++;
  }
  // 남은 예산이 0보다 크거나 같으면 모든 부서에서 지원이 가능

  return budget >= 0 ? count : count - 1;
}

console.log(solution([1, 3, 2, 5, 4], 9));
