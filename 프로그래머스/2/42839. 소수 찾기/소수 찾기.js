/**
완전 탐색
전 지역을 돌아야 함

numbers 만큼 돌고
넣고
visited 만들고 돌기
*/
function solution(numbers) {  
    const visit = {}
    const _numbers = ['']
    
   	for(let i = 0; i < numbers.length; i++) {
       const number = numbers[i]; 
        const count = _numbers.length
        for(let j = 0; j < count; j++) {
            const a = _numbers[j];
            for(let k = 0; k <= a.length; k++) {
                const front = a.slice(0, k)
                const back = a.slice(k)
                const merge = `${front}${number}${back}`
                if(visit?.[merge]) continue;
                
                visit[merge] = merge;
                _numbers.push(`${merge}`)
            }
        }
       	if(visit?.[number]) continue;
        _numbers.push(number)
        visit[number] = number
    }
    
    const result = [
        ...new Set(Object.values(visit).map((v) => parseInt(v)).filter((v) => ![0, 1].includes(v)))
    ]

    
    const top = result[result.length - 1]
    
   	const prime = Array.from({length: top + 1}).map((_, i) => true)
    
    for(let i = 2; i <= Math.ceil(Math.sqrt(top)); i++) {
        if(!prime[i]) continue;
        for(let j = 2; j * i <= top; j++) {
            prime[i * j] = false;
        }
    }
    
    
    return result.filter((r) => prime[r]).length
}