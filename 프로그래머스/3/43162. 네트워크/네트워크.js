/**
 * 1이면
 * 1인 배열 인덱스로 들어가기
 * 1인 거 찾기
 * 반복 끝나면 visit 넣기
 */

function solution(n, computers) {
    var answer = 0
    
    const visit = []
        
    const DFS = (number) => {
        if(visit.includes(number)) return;
        
        visit.push(number);
        const current = computers[number]
        
        for(let i = 0; i < current.length; i++) {
            if(current[i] === 0) continue;
            if(i === number) continue;
            else DFS(i);
        }
    }
    
    for(let i = 0; i < n; i++) {
        if(visit.includes(i)) continue;
        DFS(i);
        answer++
    }
    
    return answer;
}