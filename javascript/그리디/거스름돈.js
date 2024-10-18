const denominations = [1, 10, 50, 100];

const solution = (amount) => {
  // 화폐 단위를 큰 순서대로 정렬한다.
  denominations.sort((a, b) => b - a);

  const result = []; //  거스름돈을 담는 배열

  for (const coin of denominations) {
    // 해당 화폐 단위로 거스름돈을 계속 나눠준다.
    while (amount >= coin) {
      result.push(coin); // 거스름돈 배열 업데이트
      amount -= coin; // 정산이 완료된 거스름돈은 차감
    }
  }
  return result; // 거스름돈 배열
};

console.log("amount 123 : ", solution(123)); // [ 100, 10, 10, 1, 1, 1 ]

console.log("amount 350 : ", solution(350)); // [ 100, 100, 100, 50 ]
