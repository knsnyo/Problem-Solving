function solution(players, callings) {
   	const rank_name = {}
    const name_rank = {} 
    
    for(let i = 0; i < players.length; i++) {
        name_rank[players[i]] = i
        rank_name[i] = players[i]
    }
    
    for(const callName of callings) {
        const callRank = name_rank[callName]
        const prevName = rank_name[callRank - 1]
        const prevRank = callRank - 1;
        
        name_rank[prevName] = callRank
        name_rank[callName] = prevRank
        rank_name[prevRank] = callName
        rank_name[callRank] = prevName
        
    }
   
    return Object.values(rank_name);
}