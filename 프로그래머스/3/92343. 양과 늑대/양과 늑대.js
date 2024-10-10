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

/*
class Tree {
    constructor(index, value) {
        this.index = index;
        this.value = value;
        this.children = []
    }
    
    insert(parent, index, value) {
        if(this.index === parent) {
        	this.children.push(new Tree(index, value))
            return true;
        }
        
        for(const child of this.children) {
            if(child.insert(parent, index, value)) break;
        }
        
        return false;
    }
    
    find(index) {
        if(this.index === index) return this
        
        for(const child of this.children) {
            const value = child.find(index);
            if (value) return value
        }
            
        return undefined
    }
}
*/

function solution(info, edges) {
    /*
    const tree = new Tree(0, SHEEP)
    edges.sort((a, b) => a[0] - b[0])
    
    for(const [parent, index] of edges) {
        const value = info[index]
        tree.insert(parent, index, value)
    }
    */
    
    const tree = {}
    
    for(const [parent, index] of edges) {
        if(tree[parent]) tree[parent].push(index)
        else tree[parent] = [index]
    }
    
    console.log(tree)
    
    const queue = new Queue()
    queue.push([0, 1, 0, new Set()])
    
    let sheepBal = 0;
    while(!queue.isEmpty()) {
        const [current, sheep, wolf, visited] = queue.pop()
        sheepBal = sheep > sheepBal ? sheep : sheepBal

        for(const t of tree[current] ?? []) {
            visited.add(t)
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