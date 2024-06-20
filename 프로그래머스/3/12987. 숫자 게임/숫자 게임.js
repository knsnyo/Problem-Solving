function solution(A, B) {
    var answer = 0;
    A.sort((a, b) => b - a)
    B.sort((a, b) => b - a)
    
    for(let i = 0; i < A.length; i += 1) {
        if(A[i] < B[answer]) answer += 1;
    }
    
    return answer;
}