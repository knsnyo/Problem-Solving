function solution(operations) {
    var answer = [];
    
    for(let op of operations) {
        const [o, number] = op.split(' ');
        
        switch(o) {
            case 'I':
                answer.push(parseInt(number));
                answer.sort((a, b) => a - b)
                break;
            case 'D':
                if (number === '-1') answer.shift();
                else answer.pop();
                break;
        }
    }
    
    const max = answer[answer.length - 1] ?? 0;
    const min = answer[0] ?? 0;
    
    return [max, min];
}