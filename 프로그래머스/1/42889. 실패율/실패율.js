function solution(N, stages) {
    var answer = [];
    let userCount = stages.length;
    
    for(let i = 0; i < N; i += 1) {
        const currentStageUser = stages.filter((s) => s === i + 1).length;
        answer.push({stage: i + 1, per: currentStageUser / userCount})
        userCount -= currentStageUser
    }
    
    return answer.sort((a, b) => b.per - a.per).map((a) => a.stage);
}