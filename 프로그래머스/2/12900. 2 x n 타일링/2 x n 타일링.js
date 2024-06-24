function solution(n) {
    var answer = [0, 1, 2];
    for(let i = 3; i < n + 1; i ++) {
        const a = (answer[i - 2] + answer[i - 1]) % 1000000007
        answer.push(a)
    }
    return answer.pop();
}

/*
1: 1
2: 2
3: 3
4: 5
5: 8
6: 
*/