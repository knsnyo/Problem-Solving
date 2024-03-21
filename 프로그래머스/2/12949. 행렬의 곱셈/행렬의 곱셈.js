function solution(arr1, arr2) {
    var answer = [];
    const rowCount = arr1.length;
    const colCount = arr2[1].length;
    const sumCount = arr1[1].length;
    
    for(let i = 0; i < rowCount; i += 1) {
        const temp = [];
        for(let j = 0; j < colCount; j += 1) {
            let sum = 0;
            for(let k = 0; k < sumCount; k += 1) {
                sum += arr1[i][k] * arr2[k][j];
            }
            temp.push(sum);
        }
        
        answer.push(temp);
    }
    
    return answer;
}