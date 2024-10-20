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
    
    isEmpty () {
        return this.front === this.rear
    }
}

function solution(nums) {
    const answer = []
    const queue = new Queue()
    for(let i = 0; i < nums.length; i++) {
		const num = nums[i]
        queue.push([num, [i], 1])
    }
    
    while(!queue.isEmpty()) {
		const [sum, visit, count] = queue.pop()
        
        if(count === 3) {
            answer.push(sum);
            continue;
        }
        
    	for(let i = visit[visit.length - 1]; i < nums.length; i++) {
			if(visit.includes(i)) continue;
            const current = nums[i]
            const copied = Array.from(visit)
            copied.push(i)
            queue.push([sum + current, copied, count + 1])
    	}
    }
    
    let count = 0;
    
    
    for(const n of answer) {
        for(let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
            if(n % i === 0) {
                count--
                break
            }
        }
        count++
    }
    
    return count;
}