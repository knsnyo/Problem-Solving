function solution(number, limit, power) {
    var answer = 0;
    
    for(let i = 1; i <= number; i += 1) {
        const y = yaksu(i);
        const metal = y <= limit ? y : power;
        answer += metal;
    }
    
    return answer;
}

const yaksu = (number) => {
   	let result = [];
	const sqrtNumber = Math.floor(Math.sqrt(number));
    for(let i = 1; i <= sqrtNumber; i += 1) {
        if(number % i) continue;
        result.push(i)
    }
    for(let r of result) {
        const temp = number / r;
        if(result.includes(temp)) continue;
        result.push(temp)
    }
    
    return result.length;
}