function solution(s){
    var answer = true;
    var check = [];
    for(let a of s) {
        
        if(a === '(') check.push(1);
        else if(!check.pop()) answer = false;
    }
   	

    return check.length === 0 && answer;
}