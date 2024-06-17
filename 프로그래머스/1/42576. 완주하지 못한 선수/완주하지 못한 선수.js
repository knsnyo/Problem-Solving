function solution(participant, completion) {
    var answer = '';
    const MAP = {};
    
    for(let p of participant) {
        if(MAP[p]) MAP[p] += 1;
        else MAP[p] = 1;
    }
    
    for(let c of completion) {
        MAP[c] -= 1;
        if(MAP[c] === 0) delete MAP[c]
    }
    
    for(let m in MAP) {
        return m;
    }
    
    
}