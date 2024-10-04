const susuryo = (money) => {
    return Math.floor(money / 10)
}

function solution(enroll, referral, seller, amount) {
    // parent: child
    const parent = {};
    const wallet = {}
    for(let i = 0; i < enroll.length; i++) {
        parent[enroll[i]] = referral[i];
        wallet[enroll[i]] = 0;
    }
    
    
    for(let i = 0; i < seller.length; i++) {
       	let money = amount[i] * 100;
        let current = seller[i];
        
        while(money > 0 && current !== '-') {
            const give = susuryo(money);
            wallet[current] += money - give;
            current = parent[current];
            money = give;
        } 
    }
    
   
    
    return Object.keys(wallet).map((k) => wallet[k]);
}