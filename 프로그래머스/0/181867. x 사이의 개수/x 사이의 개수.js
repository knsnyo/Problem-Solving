function solution(myString) {
    var answer = [];
    return myString.split('x').map((a) => a.length);
}