const SHEEP = 0
const WOLF = 1

class Queue {
    front = 0
    rear = 0 
    item = []
    
    push(_item) {
        this.item.push(_item)
        this.front++;
    }
    
    pop(_item) {
        return this.item[this.rear++]
    }
    
    isEmpty() {
        return this.front === this.rear
    }
}


function solution(info, edges) {
    const tree = {}
    
    for(const [parent, index] of edges) {
        if(tree[parent]) tree[parent].push(index)
        else tree[parent] = [index]
    }
    
    
    const queue = new Queue()
    queue.push([0, 1, 0, new Set()])
    
    let sheepBal = 0;
    while(!queue.isEmpty()) {
        const [current, sheep, wolf, visited] = queue.pop()
        sheepBal = sheep > sheepBal ? sheep : sheepBal
        
        for(const child of tree?.[current] ?? []) {
            visited.add(child)
        }

        for(const visit of visited) {
            const animal = info[visit]

            switch(animal) {
                case SHEEP: {
                    const newVisited = new Set(visited)
                    newVisited.delete(visit);
                    queue.push([visit, sheep + 1, wolf, newVisited]);
                    break;
                }
                case WOLF: {
                    if(sheep === wolf + 1) break;
                   	
                    const newVisited = new Set(visited)
                   	newVisited.delete(visit);
                    queue.push([visit, sheep, wolf + 1, newVisited])
                    break;
                }
            }
        }
    }
    
    return sheepBal;
}