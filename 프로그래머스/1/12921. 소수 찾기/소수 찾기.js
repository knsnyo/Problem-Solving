function solution(n) {
    let answer = [0, 0];
    
    for(let i = 2; i <= n; i += 1) {
        answer.push(i);
    }
    
    for(let i = 2; i < answer.length; i += 1) {
        for(let j = i * i ; j < answer.length; j += i) {
            if(j % i !== 0) continue;
            if(answer[j] === 0) continue;
            answer[j] = 0;
        }
    }
    
    return answer.filter((a) => a !== 0).length;
}