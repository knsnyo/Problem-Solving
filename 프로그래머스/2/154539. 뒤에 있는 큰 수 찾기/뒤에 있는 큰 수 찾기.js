function solution(numbers) {
    var answer = [];
    var etc = [];
    var maxNum = 0;
    while(numbers.length) {
        const last = numbers.pop();
        if(last >= maxNum) {
            maxNum = last;
            etc.push(last);
            answer.push(-1);
            continue;
        }
        let check = -1;
     	for(let i = etc.length - 1; i > -1; i--) {
            if(etc[i] > last) {
                check = etc[i];
                break;
            }
            etc.pop();
        }
        etc.push(last);
        answer.push(check);
    }
    return answer.reverse();
}