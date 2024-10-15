def bubble_sort(arr):
    # 리스트의 끝부터 시작하여 1까지 감소하는 루프
    for i in range(len(arr) - 1, 0, -1):
        swapped = False  # 스왑 여부를 나타내는 변수 초기화
        # 현재 정렬할 부분에 대한 루프
        for j in range(i):
            # 현재 원소와 다음 원소 비교하여 정렬 순서가 맞지 않으면 스왑
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True  # 스왑이 발생했음을 표시
        # 만약 스왑이 발생하지 않았다면 정렬이 완료되었으므로 종료
        if not swapped:
            break
    return arr  # 정렬된 리스트 반환


bubble_sort([3, 2, 1, 4, 5])  # 함수 호출
