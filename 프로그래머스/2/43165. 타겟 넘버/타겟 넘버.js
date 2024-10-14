class Queue {
    front = 0
    rear = 0;
    items = []
    
    push (item) {
        this.items.push(item)
        this.front++
    }
    
    pop () {
        return this.items[this.rear++]
    }
    
    isEmpty () {
        return this.front === this.rear
    }
}

function solution(numbers, target) {
    let answer = 0
    const queue = new Queue()
    const [first, ...etc] = numbers
    
    queue.push([first, etc])
    queue.push([-first, etc])
    
    while(!queue.isEmpty()) {
        const [result, etc] = queue.pop()
        
        if(etc.length === 0) {
            answer += result === target ? 1 : 0
            continue;
        }
        
        const [_result, ..._etc] = etc
        
        queue.push([result + _result, _etc])
        queue.push([result - _result, _etc])
    }
    
    return answer;
}