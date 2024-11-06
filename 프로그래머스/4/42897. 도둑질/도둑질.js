

function solution(money) {
    const first = [...money];
    first.pop()
    first.unshift(0)
    const last = [...money];
    last.shift()
    last.unshift(0)
    
    for(let i = 0; i < first.length - 3; i++) {
        const a = first[i];
        const b = first[i + 1];
        const result = a > b ? a : b;
        first[i + 3] += result
    }
    
    
    for(let i = 0; i < last.length - 3; i++) {
        const a = last[i];
        const b = last[i + 1];
        const result = a > b ? a : b;
        
        last[i + 3] += result
    }
    

    const a = first.pop()
    const b = first.pop()
    const c = last.pop()
    const d = last.pop()
    
    return [a, b, c, d].sort((a, b) => a - b).pop();
}