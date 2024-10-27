function solution(bandage, health, attacks) {
    var answer = health;
    const [time, heal, plus] = bandage;
    const end = attacks[attacks.length - 1][0]
    let combo = 0;
    for(let i = 0; i <= end; i++) {
        if(attacks[0][0] === i) {
            combo = 0;
           	const [_, damage] = attacks.shift();
            answer -= damage
            
            if(answer <= 0) return -1;
            continue;
        }
        //
        combo++;
        if(combo === time) {
            combo = 0;
            answer += plus;
        }
        answer += heal;
        if(answer > health) answer = health;
    }
    return answer;
}