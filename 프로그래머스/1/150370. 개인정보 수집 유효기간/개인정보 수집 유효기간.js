function solution(today, terms, privacies) {
    var answer = [];
    
    const TERMS_MAP = {}
    for(const term of terms) {
        const [key, value] = term.split(' ')
        TERMS_MAP[key] = parseInt(value)
    }
    
    const TODAY = new Date(today)
    for(let i = 0; i < privacies.length; i++) {
        const [day, term] = privacies[i].split(' ')
      	const end = getEndTerm(day, TERMS_MAP[term])
    
        if(isPast(TODAY, end)) {
            answer.push(i + 1)
        }
    }
    
    return answer;
}

const getEndTerm = (date, term) => {
    const _date = new Date(date)
    
    return new Date(_date.getFullYear(), _date.getMonth() + term, _date.getDate())
}

const isPast = (source, target) => {
    // 년도 비교
    if(source.getFullYear() > target.getFullYear()) {
        return true;
    } else if(source.getFullYear() < target.getFullYear()) {
        return false
    } else if(source.getMonth() > target.getMonth()) {
        return true
    } else if(source.getMonth() < target.getMonth()) {
        return false
    } else if(source.getDate() >= target.getDate()) {
        return true
    } else {
        return false
    }
}