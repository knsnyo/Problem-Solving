function solution(phone_book) {
    const hashPhone = {};
    
    for(let phone of phone_book) {
        hashPhone[phone] = phone
    }
    
    for(let phone of phone_book) {
        for(let i = 1; i < phone.length; i += 1) {
            const temp = phone.substring(0, i);
            if(hashPhone[temp]) return false;
        }
    }
    
    return true
}