class Queue {
    items = []
    front = 0
    rear = 0
    
    push(item) {
        this.items.push(item)
        this.rear++
    }
    
    pop() {
        return this.items[this.front++]
    }
    
    isEmpty() {
        return this.front === this.rear
    }
}

function solution(begin, target, words) {
    if (!words.includes(target)) return 0
    const queue = new Queue()
    queue.push([begin, [], 0])
    
    while(!queue.isEmpty()) {
        const [current, visit, count] = queue.pop()
        if(current === target) return count;
        
        for(let i = 0; i < words.length; i++) {
            const word = words[i]
            if(!canChange(current, word)) continue
            if(visit.includes(word)) continue
            
            const copied = Array.from(visit)
            visit.push(word)
            queue.push([word, copied, count + 1])
        }
    }
    
    return 0;
}

const canChange = (begin, target) => {
    for(let i = 0; i < begin.length; i++) {
        const first = begin.slice(0, i)
        const next = begin.slice(i + 1)
        
        const regex = new RegExp(`${first}.${next}`)
        if(regex.test(target)) return true;
    }
    
    return false
}