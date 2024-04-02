function solution(cacheSize, cities) {
    var answer = 0;
    let cached = []
    
    for(let city of cities) {
        const search = city.toLowerCase();
        if(cached.includes(search)) {
            answer += 1;
            const index = cached.indexOf(search);
            cached.splice(index, 1)
            cached.push(search)
            continue;
        }
        answer += 5;
        cached.push(search);
        if(cached.length > cacheSize) {
            cached = cached.slice(1)
        }
        
    }
    
    return answer;
}