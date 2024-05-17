function solution(land) {
    var answer = [land[0]];
    
    for(let i = 1; i < land.length; i += 1) {
        const dp = []
        for(let j = 0; j < 4; j += 1) {
            const copied = [].concat(answer[i - 1]);
            copied[j] = -1;
            const copiedMax = Math.max.apply(null, copied);
            
            dp.push(land[i][j] + copiedMax);
        }
        answer.push(dp)
    }
	return answer.pop().sort((a,b) => a - b).pop();
}