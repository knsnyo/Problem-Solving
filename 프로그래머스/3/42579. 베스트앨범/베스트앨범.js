function solution(genres, plays) {
    var answer = [];
    let played = {} // 장르별 재생 횟수
    const list = {}
    
    for(let i = 0; i < genres.length; i++) {
        const genre = genres[i]
        const play = plays[i];
        
        !played[genre] ? played[genre] = play : played[genre] += play
        !list[genre] ? list[genre] = [[i, play]] : list[genre].push([i, play])
    }
    
    played = Object.keys(played).sort((a, b) => played[b] - played[a])
    
    for(const p of played) {
        const GENRE = list[p]
        
        GENRE.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]) 
        const album = GENRE.slice(0, 2).map((a) => a[0])
        
        console.log(album)
        answer.push(...album)
    }
    
    
    return answer
}