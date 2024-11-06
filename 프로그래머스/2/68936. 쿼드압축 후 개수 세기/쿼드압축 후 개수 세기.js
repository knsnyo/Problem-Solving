var answer = [0, 0]

function solution(arr) {    
    DFS(arr, 0, 0, arr.length)
    
    return answer;
}

const DFS = (arr, startX, startY, size) => {
    const standard = arr[startX][startY];
    const SIZE = size / 2
    for(let i = startX; i < startX + size; i++) {
        for(let j = startY; j < startY + size; j++) {
            if(standard === arr[i][j]) continue
            const leftTop = DFS(arr, startX, startY, SIZE)
            const rightTop = DFS(arr, startX + SIZE, startY, SIZE)
            const leftBottom = DFS(arr, startX, startY + SIZE, SIZE)
            const rightBottom = DFS(arr, startX + SIZE, startY + SIZE, SIZE)
            return;
        }
    }
	answer[standard]++
}