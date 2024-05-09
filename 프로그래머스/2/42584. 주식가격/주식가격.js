function solution(prices) {
    var answer = [];
    
    const count = prices.length;
    for(let i = 0; i < count; i += 1) {
        const current = prices[i];
        let temp = -1;
        
        for(let j = i + 1; j < count; j += 1) {
            const next = prices[j];
            if(next < current) {
                temp = j;
                break;
            }
        }
        if(temp === -1) answer.push(count - (i + 1));
        else answer.push(temp - i);
    }
    
    return answer;
}