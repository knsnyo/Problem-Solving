const MIDDLE = {
    2: { 1: 1, 2: 0, 3: 1, 4: 2, 5: 1, 6: 2, 7: 3, 8: 2, 9: 3, 0: 3, 10: 4, 12: 4 },
    5: { 1: 2, 2: 1, 3: 2, 4: 1, 5: 0, 6: 1, 7: 2, 8: 1, 9: 2, 0: 2, 10: 3, 12: 3},
    8: { 1: 3, 2: 2, 3: 3, 4: 2, 5: 1, 6: 2, 7: 1, 8: 0, 9: 1, 0: 1, 10: 2, 12: 2},
    0: { 1: 4, 2: 3, 3: 4, 4: 3, 5: 2, 6: 3, 7: 2, 8: 1, 9: 2, 0: 0, 10: 1, 12: 1},
}

function solution(numbers, hand) {
    var answer = '';
    const hands = {
        left: 10,
        right: 12,
    }
    
    for(const n of numbers) {
        switch(n) {
            case 1: case 4: case 7:
                answer += 'L';
                hands.left = n;
                break;
            case 3: case 6: case 9:
                answer += 'R';
                hands.right = n;
                break;
            default:
                const delta = MIDDLE[n]
                const dl = delta[hands.left]
                const dr = delta[hands.right]
              	const isLeft = hand === 'left' ? dl <= dr : dl < dr
                
                answer += isLeft ? 'L' : 'R'
                isLeft ? hands.left = n : hands.right = n;
                break;
        }
    }
    return answer;
}