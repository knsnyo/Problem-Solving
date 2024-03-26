function solution(citations) {
    var answer = 0;
    var length = 0;
    var answerNext = 0;
    citations.sort((a, b) => a - b);
    for(let i = 0; i < citations.length; i += 1) {
        if(citations.at(i) >= citations.slice(i).length) {
            answer = citations.slice(i).length;
            break;
        }
    }
    
    return answer;
}