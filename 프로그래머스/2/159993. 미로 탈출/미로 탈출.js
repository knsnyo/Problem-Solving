class Queue {
    item = []
    front = 0
    rear = 0
    
    push (_) {
        this.item.push(_)
        this.rear++
    }
    
    pop() {
        return this.item[this.front++]
    }
    
    isEmpty () {
        return this.front === this.rear
    }
}

const isValidRoute = (dRow, dCol, maps) => {
    const maxRow = maps.length
    const maxCol = maps[0].length

    return dRow >= 0 && dCol >= 0 && dRow < maxRow && dCol < maxCol && maps[dRow][dCol] !== 'X'
}


function solution(maps) {
    /// Queue Setting
    const queue = new Queue()
	const [startRow, startCol, endRow, endCol] = findStartEnd(maps)
    queue.push([startRow, startCol, 0, 0])     // x, y, time, flag
    
    // visited Setting
    const maxRow = maps.length;
    const maxCol = maps[0].length;
    const visited = [] // [row][col][lever] => [0: false, 1: false]
    for(let i = 0; i < maxRow; i++) {
        const temp = [];
        for(let j = 0; j < maxCol; j++) {
            temp.push([false, false])
        }
        visited.push(temp)
    }
    
    
    const dRow = [-1, 1, 0, 0]
    const dCol = [0, 0, -1, 1]
    
    
    while(!queue.isEmpty()) {
        const [row, col, time, lever] = queue.pop()
        
        if(row === endRow && col === endCol && lever === 1) {
            return time
        }
        
        
        for(let i = 0; i < 4; i++) {
            const _row = row + dRow[i]
            const _col = col + dCol[i]
            
            if(!isValidRoute(_row, _col, maps)) continue
            
            
            switch(maps[_row][_col]) {
                case 'L': {
                	if(visited[_row][_col][lever]) break
                	queue.push([_row, _col, time + 1, 1])
                    visited[_row][_col][lever] = true
                    break;  
                } 
                default: {
                   	if(visited[_row][_col][lever]) break;
                    queue.push([_row, _col, time + 1, lever])
                    visited[_row][_col][lever] = true
                    break;
                }

            }
        }
    }
    
    
    return -1
}

const findStartEnd = (maps) => {
    let start;
    let end;
    
    for(let i = 0; i < maps.length; i++) {
        const map = maps[i]
        for(let j = 0; j < map.length; j++) {
            switch(map[j]) {
                case 'S':
                    start = [i, j]
                    break
                case 'E':
                    end = [i, j]
                    break;
            }
        }
    }
    
    
    return [...start, ...end]
}