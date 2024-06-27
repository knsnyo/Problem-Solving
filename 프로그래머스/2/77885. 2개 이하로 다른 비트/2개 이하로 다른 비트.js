function solution(numbers) {
    var answer = [];
    for(const number of numbers) {
        if(number % 2 === 0) {
            answer.push(number + 1)
            continue
        } 
        
        let bitNumber = number.toString(2).split('')
        bitNumber.reverse()
        bitNumber.push('0')
        
        for(let i = 0; i < bitNumber.length; i++) {
            if(bitNumber[i] === '1' && bitNumber[i + 1] === '0') {
                bitNumber[i] = '0'
                bitNumber[i + 1] = '1'
                break
            }
        }
        bitNumber.reverse()
        const parsing = parseInt(bitNumber.join(''), 2)
        answer.push(parsing)
        
    }
    return answer;
}