const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function solution(keymap, targets) {
    var answer = [];
    const MAP = {};
    
    for(let a of alphabet) {
        const temp = [];
        for(let key of keymap) {
            const index = key.indexOf(a);
            temp.push(index + 1);
        }
        MAP[a] = temp.filter(a => a !== 0).sort((a, b) => a - b)?.[0] ?? -1
    }
    
    for(let target of targets) {
        let temp = 0;
        for(let i = 0; i < target.length; i += 1) {
            const tar = target[i];
            
            if(MAP[tar] === -1) {
                temp = -1;
                break;
            }
            
            temp += MAP[tar];
        }
        answer.push(temp);
    }
    
    return answer;
}