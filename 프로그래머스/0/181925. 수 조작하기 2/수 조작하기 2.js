function solution(numLog) {
    var answer = '';
    
    for(let i = 0; i < numLog.length - 1;  i++) {
        const current = numLog[i];
        answer += {
            [current + 1]: 'w',
            [current - 1]: 's',
            [current + 10]: 'd',
            [current - 10]: 'a',
        }[numLog[i + 1]];
    }
    
    return answer;
}