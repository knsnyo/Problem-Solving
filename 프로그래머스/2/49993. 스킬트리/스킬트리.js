function solution(skill, skill_trees) {
    let answer = 0;
    
    for(let s of skill_trees) {
        let current = '';
        for(let i = 0; i < s.length; i += 1) {
            if(skill.includes(s[i])) current += s[i];
        }
       	const SKILL = skill.slice(0, current.length);
        if(current === SKILL) answer += 1;
    }
    
    return answer;
}