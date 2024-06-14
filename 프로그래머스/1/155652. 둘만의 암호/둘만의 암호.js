function solution(s, skip, index) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    for(let sk of skip) {
        alphabet = alphabet.replaceAll(sk, '');
    }
    
    var answer = '';
    
    for(let S of s) {
        const i = alphabet.indexOf(S);
        answer += alphabet.at(index + i)
    }
    
    return answer;
}