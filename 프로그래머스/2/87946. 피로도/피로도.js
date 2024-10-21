function solution(k, dungeons) {
    // 피로도, 방문 던전 index
    const checked = [[k, []]]
            
    for(const [my, visit] of checked) {
    	for(let i = 0; i < dungeons.length; i++) {
       		const [min, need] = dungeons[i]
            if(visit.includes(i)) continue;
            if(my < min) continue;
            if(my < need) continue;
            const copied = Array.from(visit)
            copied.push(i)
            checked.push([my - need, copied])
        }
    }
    
    return checked.reduce((a, b) => a > b[1].length ? a : b[1].length , 0)
}