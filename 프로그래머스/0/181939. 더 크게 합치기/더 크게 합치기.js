function solution(a, b) {
    var answer = 0;
    return Math.max(parseInt(`${a}${b}`), parseInt(`${b}${a}`));
}