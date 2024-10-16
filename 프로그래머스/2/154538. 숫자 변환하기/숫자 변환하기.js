class Queue {
    items = []
    front = 0
    rear = 0
    
    push(item) {
        this.items.push(item)
        this.rear++
    }
    
    pop() {
        return this.items[this.front++];
    }
    
    isEmpty () {
        return this.front === this.rear
    }
}

function solution(x, y, n) {  
    if(x === y) return 0;
    
    const queue = new Queue()
    queue.push([y, 0])
    
    const visited = {}
    
    while(!queue.isEmpty()) {
    	const [current, count] = queue.pop()
        
        const temp = [current / 3, current / 2, current - n].filter((t) => Math.floor(t) === t).sort((a, b) => a - b)
        
        for(const t of temp) {
            if (t < x) continue
            else if (visited?.[t]) continue
            else if (t === x) return count + 1
            
            visited[t] = t
            queue.push([t, count + 1])
        }
    }
    
    
    return -1;
}