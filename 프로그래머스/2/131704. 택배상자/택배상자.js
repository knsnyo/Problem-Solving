function solution(order) {
    var answer = 1;
    
    const orderStack = [];
    let MAX = order[0]
    for(let i = 1; i < MAX; i += 1) orderStack.push(i);
    
    for(let i = 1; i < order.length; i += 1) {
        if(MAX + 1 === order[i]) { answer += 1; MAX = order[i]; continue; }
        if(MAX < order[i]) {
            for(let j = MAX; j < order[i]; j += 1) {
                orderStack.push(j + 1);
            }
            MAX = order[i];
        }
        if(orderStack.pop() === order[i]) {
            answer += 1;
            continue;
        }
        break;
    }
    
    return answer;
}