function solution(clothes) {
    var answer = 1;
    
    const CLOTH_MAP = new Map();
    
    for(let cloth of clothes) {
        const check = CLOTH_MAP.get(cloth[1]);
        if(typeof check === 'undefined') CLOTH_MAP.set(cloth[1], 1)
        else CLOTH_MAP.set(cloth[1], check + 1)
    }
    
    
    
    for(let c of CLOTH_MAP) {
        answer *= c[1] + 1;
    }
    
    return answer - 1;
}