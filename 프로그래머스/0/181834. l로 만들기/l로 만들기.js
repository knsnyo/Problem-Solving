function solution(myString) {
    var answer = '';
    return myString.split('').map((l) => 'abcedfghijkl'.includes(l) ? 'l' : l).join('');
}