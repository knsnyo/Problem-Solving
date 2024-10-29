const HOUR = 0;
const MINUTE = 1;

function solution(video_len, pos, op_start, op_end, commands) {
	const videoLen = video_len.split(':').map((_) => parseInt(_))
    let current = pos.split(':').map((_) => parseInt(_))
    const opStart = op_start.split(':').map((_) => parseInt(_))
    const opEnd = op_end.split(':').map((_) => parseInt(_))
    
    current = isOpening(current, opStart, opEnd)
    for(const command of commands) {
        const h = current[HOUR]
        const m = current[MINUTE]
        switch(command) {
            case 'prev': {
				if(m < 10) {
                    current = [h - 1, m + 50]
                } else {
                    current = [h, m - 10]
                }
                break;
            }
            case 'next': {
                if(m >= 50) {
                    current = [h + 1, m - 50]
                } else {
                    current = [h, m + 10]
                }
                break;
            }
        }
        // underflow
        current = isUnderflow(current)
        // overflow
        current = isOverflow(current, videoLen)
        // 오프닝 사이인지
        current = isOpening(current, opStart, opEnd)
    }
    
    return `${format2(current[HOUR])}:${format2(current[MINUTE])}`
}

const isOpening = (current, opStart, opEnd) => {
    if(opStart[HOUR] > current[HOUR]) return current;
    if(opStart[HOUR] === current[HOUR] && opStart[MINUTE] > current[MINUTE]) return current;
    if(opEnd[HOUR] < current[HOUR]) return current;
    if(opEnd[HOUR] === current[HOUR] && opEnd[MINUTE] < current[MINUTE]) return current;
    
    return opEnd
}

const isUnderflow = (current) => {
    if(current[HOUR] < 0) return [0, 0]
   	
    return current;
}

const isOverflow = (current, videoLen) => {
    if(current[HOUR] > videoLen[HOUR]) return videoLen;
    if(current[HOUR] === videoLen[HOUR] && current[MINUTE] > videoLen[MINUTE]) return videoLen
    
    return current;
}

const format2 = (number) => {
    const _ = number.toString()
    if(_.length === 1) return `0${_}`
    else return _
}