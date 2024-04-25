function solution(n, k) {
    var answer = n.toString(k);
    answer = answer.split('0').filter((a) => isPrimeNumber(a))
    return answer.length;
}

// n: number
const isPrimeNumber = (n) => {
    if(n === '') return false;
    if(n === '1') return false;
    
    const loop = Math.floor(Math.sqrt(n))
    for(let i = 2; i <= loop; i += 1) {
        if(n % i !== 0) continue
        else return false
    }
    
    return true
}