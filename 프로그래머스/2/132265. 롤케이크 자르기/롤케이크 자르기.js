function solution(topping) {
    var answer = 0;
    const left = {};
    const right = {};
    
    for(let t of topping) {
        left[t] = (left[t] ?? 0) + 1;
    }
    
    let leftLength = Object.keys(left).length;
    let rightLength = 0;
    
    for(let t of topping) {
        left[t] -= 1;
        
        if(!left[t]) leftLength -= 1;
        if(!right[t]) {
            right[t] = t;
            rightLength += 1;
        }
        
        if(leftLength > rightLength) continue
        else if(leftLength < rightLength) break;
        else answer += 1;
    }
    
    
    return answer;
}