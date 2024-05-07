function solution(dartResult) {
	let answer = [];
    let temp = '';
    let index = -1;
	
    for(let i = 0; i < dartResult.length; i += 1) {
        const current = dartResult.at(i);
        switch (current) {
            case 'S':
                answer.push(Math.pow(temp, 1));
                temp = '';
                index += 1;
                break;
            case 'D':
                answer.push(Math.pow(temp, 2));
                temp = '';
                index += 1;
                break;
            case 'T':
                answer.push(Math.pow(temp, 3));
                temp = '';
                index += 1;
                break;
            case '*':
                answer[index] *= 2;
                answer[index - 1] *= 2;
                break;
            case '#':
                answer[index] *= -1;
            	break;
            default:
                temp += current;
                break;
        }
    }
    
    return answer.reduce((a, b) => a + b, 0);
}