function solution(n, s) {
    if(n > s) return [-1];
    
    var answer = [];
    const num = Math.floor(s / n)
    for(let i = 0; i < n; i += 1) {
        answer.push(num)
    }
    
    for(let i = 0; i < s % n; i += 1) {
        answer[answer.length - 1 - i] += 1
    }
    
    return answer;
}