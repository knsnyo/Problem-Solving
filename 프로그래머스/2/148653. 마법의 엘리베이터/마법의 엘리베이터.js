const COUNT = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 4, 7: 3, 8: 2, 9: 1} 

function solution(storey) {
	var answer = 0;
    
    while(storey > 0) {
        const current = storey % 10
        answer += COUNT[current]
        storey -= current
        storey /= 10
        if(current >= 6) storey++
        if(current === 5 && storey % 10 >= 5) storey++
        console.log(storey)
    }
    
    return answer;
}
    
/*
105 -> 6
115 -> 7
125 -> 8
135 -> 9
145 -> 10 // 11
155 -> 11 // 11
165 -> 12 // 10
175 -> 13 // 12
185 -> 
*/