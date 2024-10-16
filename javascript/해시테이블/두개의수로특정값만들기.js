function countSort(arr, k) {
  // 해시 테이블 초기화
  const hashTable = new Array(k + 1).fill(0);

  console.log(hashTable);
  console.log(hashTable.length);

  for (const num of arr) {
    // 현재 원솓의 값이 k 이하인 때에만 처리
    if (num <= k) {
      // 현재 원소의 값을 인덱스로 해 해당 인덱스의 해시 테이블 값을 1로 설정
      hashTable[num] = 1;
    }
  }

  return hashTable;
}

function solution(arr, target) {
  const hashTable = countSort(arr, target);

  console.log("해시 테이블", hashTable);

  for (const num of arr) {
    const complete = target - num;
    console.log(complete);
    if (complete !== num && complete >= 0 && complete <= target && hashTable[complete] === 1) {
      return true;
    }
  }
  return false;
}
solution([1, 2, 3, 4, 8], 6);
solution([1, 2, 3, 4], 10);
