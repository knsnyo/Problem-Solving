function solution(park, routes) {
    var answer = [0, 0];
    const PARK = []
    for(let i = 0; i < park.length; i++) {
        const temp = []
        for(let j = 0; j < park[i].length; j++) {
            const current = park[i].at(j)
            temp.push(current)
            if(current === 'S') {
                answer = [i, j]
            }
        }
        PARK.push(temp)
    }
    
    for(const route of routes) {
        const [direction, length] = route.split(' ')
        
        let isEnd = true;
        const current = [answer[0], answer[1]]
        for(let i = 0; i < length; i++) {
            switch(direction) {
                case 'E':
                    current[1]++;
                    break;
                case 'W':
                    current[1]--;
                    break;
                case 'N':
                    current[0]--;
                    break;
                case 'S':
                    current[0]++;
                    break;
            }
            const check = PARK?.[current[0]]?.[current[1]]
            if(!check || check === 'X') {
                isEnd = false;
                break;
            }
        }
        if(isEnd)  {
        	answer = current;   
        }
    }
    return answer;
}