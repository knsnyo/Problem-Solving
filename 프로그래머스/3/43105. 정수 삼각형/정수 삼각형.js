function solution(triangle) {
    var answer = 0;
    for(let i = 1; i < triangle.length; i += 1) {
        const prev = triangle[i - 1];
        const temp = [];
        for(let j = 0; j < triangle[i].length; j += 1) {
            const current = triangle[i][j];
            const left = prev[j - 1] ?? 0
            const right = prev[j] ?? 0;
            const max = left > right ? left : right;
            
            temp.push(current + max);
        }

        triangle[i] = temp;
    }
    
    return triangle[triangle.length - 1].sort((a,b) => a - b).pop();
}