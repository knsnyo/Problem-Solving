const BURN = 1
const VEGETABLE = 2
const MEAT = 3


const makeable = (items) => {
    const length = items.length;
    if(items.length < 4) return false;
    
    return items[length - 1] === BURN && 
        items[length - 2] === MEAT && 
        items[length - 3] === VEGETABLE && 
        items[length - 4] === BURN 
}

function solution(ingredient) {
    var answer = 0;
    let hamburger = [];
    
    for(const i of ingredient) {
        hamburger.push(i)
        if(makeable(hamburger)) {
            hamburger.pop()
            hamburger.pop()
            hamburger.pop()
            hamburger.pop()
            answer++
        }
    }
    
    return answer;
}