// 바뀔 값이 -5, 5 사이인지
const isValid = (dx, dy) => {
    return dx >= -5 && dx <= 5 && dy >= -5 && dy <= 5
}

const updateLocation = (x, y, command) => {
    switch (command) {
        case 'U':
            return [x, y + 1];
        case 'D':
            return [x, y - 1];
        case 'R':
            return [x + 1, y];
        case 'L':
            return [x - 1, y];
    }
}

function solution(dirs) {
    let x = 0;
    let y = 0;
    
    const visited = new Set();
    
    for(const dir of dirs) {
        const [dx, dy] = updateLocation(x, y, dir);
        
        if(!isValid(dx, dy)) continue;
        
        visited.add(`${x}${y}${dx}${dy}`);
        visited.add(`${dx}${dy}${x}${y}`);
        
        [x, y] = [dx, dy];
    }
    
    
    return visited.size / 2;
}