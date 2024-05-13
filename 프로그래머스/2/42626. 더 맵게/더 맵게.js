function solution(scoville, K) {
    var answer = 0;
    const heap_scoville = new HEAP();
    for(let s of scoville) {
        heap_scoville.add(s);
    }
    while(heap_scoville.size() > 1 && heap_scoville.head() < K) {
        const num1 = heap_scoville.poll();
        const num2 = heap_scoville.poll();
        heap_scoville.add(num1 + num2 * 2);
        answer += 1;
    }

    return heap_scoville.heap.every((h) => h >= K) ? answer : -1;
}

class HEAP {
	constructor() { this.heap = []; }
    
    size() { return this.heap.length; }
    
    head() { return this.heap[0];}
    
    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
    
    parentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }
    
    add(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    bubbleUp() {
        let index = this.size() - 1;
        let parentIndex = this.parentIndex(index);
        
        while(
            this.heap[parentIndex] && 
            this.heap[index] < this.heap[parentIndex]
        ) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = this.parentIndex(index);
        }
    }
    
    poll() {
        if(this.heap.length === 1) {
            return this.heap.pop();
        }
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }
    
    bubbleDown() {
        let index = 0;
        let left = 1;
        let right = 2;
        while(
            this.heap[left] && this.heap[left] < this.heap[index] ||
        	this.heap[right] && this.heap[right] < this.heap[index]
        ) {
            let smallIndex = left;
            if(this.heap[right] && this.heap[right] < this.heap[smallIndex]) {
                smallIndex = right;
            }
            this.swap(index, smallIndex);
            index = smallIndex;
            left = index * 2 + 1;
            right = index * 2 + 2;
        }
    }
}
