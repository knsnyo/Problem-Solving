const GIVE = 0;
const TAKE = 1;

function solution(friends, gifts) {
    var answer = 0;
    const GIFT_MAP = {}
    
    // 초기화
    for(const give of friends) {
        GIFT_MAP[give] = {}
        for(const take of friends) {
            if(give === take) GIFT_MAP[give][take] = 0
            else GIFT_MAP[give][take] = [0, 0]
            // 준 거, 받은 거
        }
    }
    
    // 받고 주기
    for(const gift of gifts) {
        const [giver, taker] = gift.split(' ')
       	GIFT_MAP[giver][taker][GIVE]++
        GIFT_MAP[taker][giver][TAKE]++
    }
    
    // 선물 지수 구하기
    for(const f of friends) {
        const current = GIFT_MAP[f]
        
        const point = Object.values(current).reduce((a, b) => {
            if(!Array.isArray(b)) return a
            else return a - b[TAKE] + b[GIVE]
        }, 0)
        
        GIFT_MAP[f][f] = point
    }
    
    // 받을 선물 구하기
    
    const GIFT_POINT = []
    for(const giver of friends) {
        let temp = 0;
        for(const taker of friends) {
            if(giver === taker) continue;
            
            const log = GIFT_MAP[giver][taker]
            if(log[GIVE] < log[TAKE]) continue;
            if(log[GIVE] === log[TAKE] && GIFT_MAP[giver][giver] <= GIFT_MAP[taker][taker])
                continue
            temp++
        }
		GIFT_POINT.push(temp)
    }
    
    return GIFT_POINT.sort((a, b) => a - b).pop();
}