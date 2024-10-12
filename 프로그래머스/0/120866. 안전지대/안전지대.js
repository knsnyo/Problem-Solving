const checkBomb = (board, i, j) => {
    const maxI = board.length - 1;
    const maxJ = board[0].length - 1;

    if(i !== 0) {
        if(j !== 0) board[i-1][j-1] = board[i-1][j-1] !== 1 ? 2 : 1
        board[i-1][j] = board[i-1][j] !== 1 ? 2 : 1
        if(maxJ !== j) board[i-1][j+1] = board[i-1][j+1] !== 1 ? 2 : 1
    }
    if(maxI !== i) {
        if(j !== 0) board[i+1][j-1] = board[i+1][j-1] !== 1 ? 2 : 1
        board[i+1][j] = board[i+1][j] !== 1 ? 2 : 1
        if(maxJ !== j) board[i+1][j+1] = board[i+1][j+1] !== 1 ? 2 : 1
    }
    if(j !== 0) {
        board[i][j-1] = board[i][j-1] !== 1 ? 2 : 1
    }
    if(j !== maxJ) {
        board[i][j+1] = board[i][j+1] !== 1 ? 2 : 1
    }
    
    return board
}

function solution(board) {
    var answer = 0;
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            const current = board[i][j]
            
            switch(current) {
                case 1:
					board = checkBomb(board, i, j)
                	break;
                default:
                    break;
            }
        }
    }
    
    return board.reduce((a, b) => a + b.filter((_) => _ === 0).length, 0);
}