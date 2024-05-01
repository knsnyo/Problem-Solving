function solution(my_string, alp) {
    var answer = my_string;
    answer = answer.split('').map((a) => {
        if(a === alp) return alp.toUpperCase();
        return a;
    }).join('')
    return answer;
}