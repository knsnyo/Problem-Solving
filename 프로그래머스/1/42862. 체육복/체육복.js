function solution(n, lost, reserve) {
    var DO_DUK = 0;
    
    const LOST = [];
    const RESERVE = [];
    
    for(let l of lost) { if(!reserve.includes(l)) LOST.push(l); }
    
    for(let r of reserve) { if(!lost.includes(r)) RESERVE.push(r); }
    
    LOST.sort((a, b) => a - b);
    RESERVE.sort((a, b) => a - b);
    
    for(let L of LOST) {
        const small = RESERVE.indexOf(L - 1)
        const big = RESERVE.indexOf(L + 1)
        if(small !== -1) {
            RESERVE[small] = 0
            continue;
        }
        if(big !== -1) {
            RESERVE[big] = 0;
            continue;
        }
        DO_DUK += 1;
    }
    
    return n - DO_DUK;
}