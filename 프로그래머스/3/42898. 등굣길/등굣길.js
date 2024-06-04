function solution(m, n, puddles) {
    var map = [];
    
    for(let i = 0; i < n; i++) {
        const temp = [];
        for(let j = 0; j < m; j++) {
            temp.push(1);
        }
        map.push(temp);
    }
    
    for(let puddle of puddles) {
        map[puddle[1] - 1][puddle[0] - 1] = 0;
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(i === 0 && j === 0) continue;
            if(!map[i][j]) continue;
            
            const top = (i === 0) ? 0 : map[i - 1][j];
            const left = (j === 0) ? 0 : map[i][j - 1];
            
            map[i][j] = (top + left) % 1000000007
        }
    }
    
    return map[n - 1][m - 1];
}