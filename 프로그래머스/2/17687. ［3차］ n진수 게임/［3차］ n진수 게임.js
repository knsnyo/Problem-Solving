function solution(n, t, m, p) {
    var answer = '';
    var temp = [];
    var maxArrayLength = m * (t - 1) + p 
    for(let i = 0; temp.length < maxArrayLength; i += 1) {
        const current = i.toString(n).split('');
        temp = temp.concat(current);
    }
    
    const check = m === p ? 0 : p;
    
    for(let i = 0; i < t; i += 1) {
        answer += temp[i * m + p - 1].toUpperCase()
    }
    
    return answer;
}