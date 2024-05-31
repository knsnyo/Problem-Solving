class HEAP {
    constructor() {
        this.state = [];
    }
    
    add(item) {
        this.state.push(item);
    }
    
    init() {
        this.state.sort((a, b) => b - a)
    }
    
    sort() {
        let current = 0;
        while(1) {            
            const currentItem = this.getItemByIndex(current);
        	const left = current * 2 + 1;
        	const right = current * 2 + 2;
        	const leftItem = this.getItemByIndex(left);
            const rightItem = this.getItemByIndex(right);
            const bigItem = leftItem >= rightItem ? leftItem : rightItem;
            const bigIndex = leftItem >= rightItem ? left : right;
            
            if(bigItem === 0) break;
            if(currentItem >= bigItem) break;
            
            this.state[bigIndex] = currentItem;
            this.state[current] = bigItem;
            current = bigIndex;
        }
    }
    
    getItemByIndex(index) {
        return this.state[index] ?? 0;
    }
    
    work() {
        if(!this.state[0]) return;
        this.state[0] -= 1;
        if(this.state[0] === 0) this.state.shift();
        this.sort();
    }
    
   	stress() {
        return this.state.reduce((a, b) => a + b * b, 0);
    }
}

function solution(n, works) {
    var answer = 0;
    const heap = new HEAP();
    
    for(let work of works) {
        heap.add(work);
    }
    
    heap.init();
    
    for(let i = 0; i < n; i++) {
        heap.work();
    }
    
   
    return heap.stress();
}