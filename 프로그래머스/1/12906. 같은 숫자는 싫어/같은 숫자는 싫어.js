function solution(arr){
    var answer = [];
    var length = arr.length
    var check = 10;
    
    for(var i = 0; i < length; i++) {
        if(arr[i] !== check) {
            answer.push(arr[i]);
            check = arr[i];
        }
    }
    
    return answer;
}