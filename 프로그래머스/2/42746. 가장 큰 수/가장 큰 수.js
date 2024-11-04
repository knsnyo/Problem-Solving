// 첫째자리부터 비교
// 길이 작은 순서

function solution(numbers) {
    const sorted = numbers.map((n) => `${n}`).sort().sort((a, b) => {
        return parseInt(`${b}${a}`) - parseInt(`${a}${b}`)
    })

    let number =  sorted.join('')
    
    while(number.length > 1 && number.startsWith('0')) {
        number = number.slice(1)
    }
    
    return number
}