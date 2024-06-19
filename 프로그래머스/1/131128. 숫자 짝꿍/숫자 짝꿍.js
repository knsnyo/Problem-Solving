function solution(X, Y) {
    var answer = [];
    const MAP = {}
    for(let x of X) {
        if(MAP[x]) MAP[x] += 1
        else MAP[x] = 1;
    }
    
    for(let y of Y) {
        if(!MAP[y]) continue;
        answer.push(y);
        MAP[y] -= 1;
    }
    
    if(answer.length === 0) return '-1'
    answer.sort((a, b) => b - a);
    if(answer[0] === '0') return '0'
    
    return answer.join('');
}