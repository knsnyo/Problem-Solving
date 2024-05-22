function solution(lottos, win_nums) {
    var correct = 0;
    var checkable = lottos.filter((a) => a !== 0);
    var zeros = 6 - checkable.length;
    
    
    for(let c of checkable) {
        if(win_nums.includes(c)) correct += 1;
    }
    
    
    return [Math.min(6, 7 - (zeros + correct)), Math.min(6, 7 - correct)];
}