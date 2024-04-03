function solution(progresses, speeds) {
    var answer = [];

   	for(;progresses.length !== 0;) {
        for(let i = 0; i < progresses.length; i += 1) {
            progresses[i] += speeds[i];
        }
        const isNotDone = progresses.findIndex((e) => e < 100);
        
        // all done
       	if(isNotDone === -1) { 
          answer.push(progresses.length);
          break;
        }
        
        // no done
        if(isNotDone === 0) { 
            continue;
        }
        
        // some done
        answer.push(isNotDone);
        progresses = progresses.slice(isNotDone);
        speeds = speeds.slice(isNotDone);
    }

    
    return answer;
}