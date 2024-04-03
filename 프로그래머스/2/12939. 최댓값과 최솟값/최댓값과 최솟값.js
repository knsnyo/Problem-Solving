function solution(s) {
    var answer = '';
    var temp = s.split(' ').sort((a, b) => a - b);
    
    console.log(temp)
    
    return `${temp[0]} ${temp[temp.length - 1]}`;
}