function solution(files) {
    const answer = []
    
    const list = files.map((file) => {
        let first = -1;
        let last = -1; 
        for(let i = 0; i < file.length; i++) {
            const current = file[i];
            if('0123456789'.includes(current)) {
                first = i;
                break;
            }
        }
        
        let i = first + 1;
        for(; i < first + 1 + 5; i++) {
            const current = file[i];
            if(!'0123456789'.includes(current)){
                break;
            }
        }
        last = i;
        
        return {
            head: file.substring(0, first),
            body: file.substring(first, last),
            tail: file.substring(last),
        }
    })
    
    list.sort((a, b) => {
        const A = a.head.toUpperCase();
        const B = b.head.toUpperCase();
        
        if(A === B && parseInt(a.body) === parseInt(b.body)) return 0;
        if(A === B) return parseInt(a.body) - parseInt(b.body);
        return A.localeCompare(B)
    });
    
    
    return list.map((l) => l.head + l.body + l.tail)
}