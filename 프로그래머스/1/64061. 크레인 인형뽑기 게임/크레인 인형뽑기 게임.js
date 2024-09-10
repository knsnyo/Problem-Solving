class DollStorage {
    constructor() {
        this.count = 0;
        this.storage = [];
    }
    
    add(item) {
        const length = this.storage.length;
        const top = this.storage[length - 1];
        
        if(top === item) {
            this.storage.pop()
            this.count += 2
        } else {
            this.storage.push(item)
        }
    }
}

function solution(board, moves) {
    const dollStorage = new DollStorage();
    
    const lane = board.map(() => []);
    
    for(let i = board.length - 1; i >= 0; i--) {
        const row = board[i]
        for(let j = 0; j < row.length; j++) {
            const item = row[j]
            if(!item) continue;
            
            lane[j].push(item)
        }
    } 
    
    
    for(const move of moves) {
        const item = lane[move - 1].pop();
        if(!item) continue;
        dollStorage.add(item);
        
    }
    return dollStorage.count;
}