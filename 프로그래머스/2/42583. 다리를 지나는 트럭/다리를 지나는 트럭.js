/*
1. 다리에 올라간 트럭의 최초 시간 필요, 다리에 올라간 트럭의 무게 필요.
2. 반복문
3. 트럭 시간 초과시 shift();
4. queue가 빌 때까지.
*/
class Bridge {
    constructor(truck_weights, max, weight) {
        this.queue = [];
        this.etc = truck_weights;
       	this.addCar();
        this.max = max
        this.weight = weight;
    }
    
    addCar() {
        if(this.etc.length === 0) return;
        if(this.queue.length === this.max) return;
        
        const currentWeight = this.queue.reduce((a,b) => a + b.weight, 0);
        const waiting = this.etc[0];
       	
        if(currentWeight + waiting > this.weight) {
            return;
        } 
        
        this.queue.push({weight: this.etc.shift(), time: 1});
    }
    
    removeCar(time) {
        if(this.queue[0]?.time > this.max) {
        	this.queue.shift(); 
        }
    }
    
    isFinish() { 
        return this.queue.length === 0; 
    }
    
    lator() {
        this.queue = this.queue.map(({weight, time}) => ({weight, time: time + 1}));
    }
}


const solution = (bridge_length, weight, truck_weights) => {
    const bridge = new Bridge(truck_weights, bridge_length, weight);
    let answer = 2;
    
    while(!bridge.isFinish()) {
        bridge.lator(); // 시간 늘리기
        bridge.removeCar(answer); // 첫 차 조건부 제거
        bridge.addCar(); // 대기 차 조건부 추가

        answer++; // 시간 흐름
    }

    return answer - 1;
}