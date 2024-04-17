function solution(priorities, location) {
    var answer = 1;
    let PRIORITIES = [...priorities];
    let LOCATION = location;
    
    while(true) {
        // 이번에 실행될 프로세스 찾기
        const priority = [...PRIORITIES].sort((a, b) => a - b).pop();
        const priorityIndex = PRIORITIES.indexOf(priority);
        if(priorityIndex === LOCATION) break;
        
        // 프로세스 옮기기
        const back = PRIORITIES.slice(0, priorityIndex)
        const front = PRIORITIES.slice(priorityIndex + 1)
        
        // 프로세스 인덱스 옮기기
        if(LOCATION < priorityIndex) { 
        	// 실행 시키고 싶었던 프로세스가 뒤로 갈 때
            LOCATION += front.length;
        } else {
            // 실행 시키고 싶었던 프로세스가 뒤로 가지 않을 때
            LOCATION -= (priorityIndex + 1);
        }
        
        PRIORITIES = front.concat(back)
        answer += 1
    }
    
    return answer;
}