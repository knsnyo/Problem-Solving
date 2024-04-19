const REGEXP = /^[a-z]{2}$/
const RESULT_MAX = 65536

function solution(str1, str2) {
    var answer = 0;
    let str1Array = []
    let str2Array = []
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    // 문자열 만들기
    for(let i = 0; i < str1.length - 1; i += 1) {
        const current = str1.slice(i, i+2)
        if(!REGEXP.test(current)) continue;
        str1Array.push(current)
    }
    for(let i = 0; i < str2.length - 1; i += 1) {
        const current = str2.slice(i, i+2)
        if(!REGEXP.test(current)) continue;
        str2Array.push(current);
    }
    
    if(str1Array.length === 0 && str2Array.length === 0) return RESULT_MAX;
    
    // 교집합 구하기
    let intersection = 0
    let temp1 = str1Array;
    let temp2 = str2Array;
    for(let i = 0; i < temp1.length; i += 1) {
        const current = temp1[i];
        const index = temp2.indexOf(current);
        if(index === -1) continue;
        intersection += 1;
        temp2[index] = ''
        temp1[i] = ''
    }
    temp1 = temp1.filter((t) => t !== '')
    temp2 = temp2.filter((t) => t !== '')
    
    const union = intersection + temp1.length + temp2.length;
    
    return Math.floor(intersection / union * RESULT_MAX);
}