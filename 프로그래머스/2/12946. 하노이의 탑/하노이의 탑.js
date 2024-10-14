/*
1 -> hanoi(1, 3)
	[1, 2, 3]
    [1,3]
2 -> hanoi(2, 3) -> hanoi(1, 2) 
	[1, 3, 2] [1, 2, 3]
    [1,2] [1,3][2,3]
3 -> hanoi(3, 3) -> hanoi(2, 2) -> hanoi(1, 3)
	[1,2,3] [3,1,2] [2,1,3]
    [1,3] [1,2][3,2] [1,3][2,1][2,3] [1,3]
4 -> hanoi(4, 3) -> hanoi(3, 2) -> hanoi(2, 3) -> hanoi(1, 2) 
	[1,3,2] [2,1,3] [3,1,2] [2,1,3]
5 -> hanoi(5, 3) -> hanoi(4, 2) -> hanoi(3, 3) => hanoi(2, 2) -> hanoi(1, 3)
	[1,2,3] [3,1,2] [2,1,3] [3,1,2] [1,2,3]
*/

function solution(n) {
    return hanoi(n, 1, 2, 3, [])
}

/**
from count 위치
other 쌓여있는 우치
to 쌓을 위치 3 아니면 2
count 지금 최대
*/
const hanoi = (max, from, other, to, array) => {
	if(max === 0) return
    
    hanoi(max - 1, from, to, other, array)
    
   	array.push([from, to])
    
    hanoi(max - 1, other, from, to, array)
    
    return array;
}