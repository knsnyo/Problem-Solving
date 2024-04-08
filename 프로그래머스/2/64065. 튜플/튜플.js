function solution(s) {
    s = s.replaceAll('{', '').replaceAll('}', '')
    let temp = s.split(',').map((i) => i - 0)
    const tempMap = new Map()
    for(let i = 0; i < temp.length; i += 1) {
        const check = tempMap.get(temp[i])
        if(typeof check === 'undefined') {
            tempMap.set(temp[i], + 1)
        } else {
            tempMap.set(temp[i], check + 1)
        }
    }
    let answer = [...tempMap].sort((a, b) => b[1] - a[1])
    answer = answer.map((a) => a[0])
    
    
    return answer;
}