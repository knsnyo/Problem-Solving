class Queue {
    front = 0;
    rear = 0;
    items = []
    
    push(item) {
        this.items.push(item)
        this.rear++
    }
    
    pop() {
        return this.items[this.front++]
    }
    
    isEmpty() {
        return this.rear === this.front
    }
}

const isValid = (c, r, visited) => visited?.[r]?.[c] === false

function solution(maps) {
    const COL = maps[0].length - 1
    const ROW = maps.length - 1 
    
    if(ROW === 0 && COL === 0) return 1
    
    const queue = new Queue()
    const visit = Array.from(maps).map((m) => m.map((a) => a === 0))
    visit[0][0] = true
    queue.push([0, 0, visit, 1])
    
    //              left    right    top    bottom
    const move = [[-1, 0], [1, 0], [0, -1], [0, 1]]    
    while(!queue.isEmpty()) {
        const [_c, _r, visited, count] = queue.pop()
        
        for(const [dc, dr] of move) {
            const C = _c + dc
            const R = _r + dr

            if(C < 0 && C > COL && R < 0 && R > ROW) continue;
            if(C === COL && R === ROW) return count + 1
            if(!isValid(C, R, visited)) continue;
            
            const copied = Array.from(visited)
            copied[R][C] = true
            queue.push([C, R, copied, count + 1])
        }
    }
    
    
    return -1;
}