/**
    		table  up down
            0     -1   3
            // 1      0   3
            // 2	   1   3
            3      0   4
            
            0     -1   2
          	1	   0   2
            2      0   3
            
            input: 1
            
           	0     -1   2
          	1	   0   2
            2      0   3 
            
            0     -1   3
            1      0   3
            // 2	   1   3
            3      0   4
    
*/
function solution(n, k, cmd) {
    let up = [];
	let down = [];
    const history = [];
    let answer = []
    
    for(let i = 0; i < n; i++) {
        up.push(i - 1)
        down.push(i + 1)
        answer.push('O')
    }
    
    for(const c of cmd) {
        const [command, arg] = c.split(' ');
        
        switch(command) {
            case 'U': {
                for(let i = 0; i < arg; i++) {
                    k = up[k];
                }
                break; 
            }
            case 'D': {
                for(let i = 0; i < arg; i++) {
                    k = down[k];
                }
                break; 
            }
            case 'C': {
                history.push(k);
                up[down[k]] = up[k];
                down[up[k]] = down[k]
                k = n === down[k] ? up[k] : down[k]
                break;
            }
            case 'Z': {
                const restore = history.pop();
                up[down[restore]] = restore
                down[up[restore]] = restore       
                break;     
            }
        }
    }
    
    for(const h of history) {
        answer[h] = 'X'
    }
    
    
    return answer.join('')
}
