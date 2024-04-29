const ZIP = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 
         'H', 'I', 'J', 'K', 'L', 'M', 'N', 
         'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
         'V', 'W', 'X', 'Y', 'Z']

function solution(msg) {
    var answer = [];
    const length = msg.length;
    
    let startIndex = 0;
    let findIndex = 2;
    while(startIndex < length) {
        const temp = msg.slice(startIndex, findIndex);
        if(ZIP.includes(temp) && findIndex <= length) {
            findIndex += 1;
            continue;
        }
        
        ZIP.push(temp);
        const current = msg.slice(startIndex, findIndex - 1)
        const index = ZIP.indexOf(current);
        answer.push(index)
        startIndex = findIndex - 1;
        findIndex += 1;
        // answer.push(current);
    }
    
    return answer;
}