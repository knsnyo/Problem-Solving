function solution(id_list, report, k) {
    var answer = [];
    
    const setReport = [...new Set(report)]
    
    const history = {}
    const result = {}
    for(const r of setReport) {
        const [give, receive] = r.split(' ')
        if(!result[receive]) {
            result[receive] = 0;
        }
        result[receive] += 1
        if(!history[receive]) {
            history[receive] = []
        }
        history[receive].push(give)
    }
    
    const stopUserList = id_list.filter((id) => result[id] >= k)
    
    answer = id_list.map(() => 0)
    for(const stopUser of stopUserList) {
        const list = history[stopUser];
        for(const l of list) {
            const index = id_list.indexOf(l)
            answer[index] += 1
        }
    }
    
    return answer
}