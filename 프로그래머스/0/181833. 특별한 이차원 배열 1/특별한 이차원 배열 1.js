function solution(n) {
    var answer = [];
    for(let i = 0;i < n; i++) {
        const temp = []
        for(let j = 0; j < n; j++) {
            temp.push(i === j ? 1 : 0)
        }
        answer.push(temp)
    }
    return answer;
}