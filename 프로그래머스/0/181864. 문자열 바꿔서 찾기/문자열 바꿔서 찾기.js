function solution(myString, pat) {
    var answer = 0;
    const convert = myString
    	.split('')
    	.map((s) => s === 'A' ? 'B' : 'A')
    	.join('')
    return convert.includes(pat) ? 1 : 0;
}