function solution(names) {
    var answer = [];
    return names.filter((a, i) => i % 5 === 0);
}