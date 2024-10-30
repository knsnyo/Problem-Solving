function solution(arr, idx) {
    var answer = arr.slice(idx).indexOf(1);
    return answer === -1 ? answer : answer + idx;
}