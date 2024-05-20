function solution(fees, records) {
    let attendance = {}; // 명부 작성용
    let receipt = {}; // 영수증 작성용
    let answer = [];
    
    for(let record of records) {
        const r = record.split(' ')
        const time = r[0];
        const carNumber = r[1];
        switch(r[2]) {
            case 'IN':
                // 명부에 적기
                attendance[carNumber] = time
          		break;
            case 'OUT':
                // 시간 계산
                const startTime = attendance[carNumber];
                const parkingTime = calcTime(startTime, time);
                if(receipt[carNumber]) receipt[carNumber] += parkingTime;
                else receipt[carNumber] = parkingTime;
                
                delete attendance[carNumber];
                break;
        }
    }
    
    // 불법 점거 차량 검거
    for(let carNumber in attendance) {
        const startTime = attendance[carNumber];
        const parkingTime = calcTime(startTime, '23:59')
            
        if(receipt[carNumber]) receipt[carNumber] += parkingTime;
        else receipt[carNumber] = parkingTime;
    }
    
    for(let key in receipt) {
        const fee = calcFee(receipt[key], fees)
        answer.push({car: key, fee: fee})
    }
    
    
    
    return answer.sort((a, b) => a.car - b.car).map((e) => e.fee);
}

const calcTime = (startTime, endTime) => {
    const convertEndTime = getTime(endTime)
    const convertStartTime = getTime(startTime)
  	return convertEndTime - convertStartTime;
}

const getTime = (time) => {
    time = time.split(':')
    time = parseInt(time[0]) * 60 + parseInt(time[1])
    return time;
}

const calcFee = (time, fees) => {
    const basicTime = fees[0]; // 기본 시간(분)
    const basicFee = fees[1]; // 기본 요금(원)
    const surTime = fees[2]; // 단위 시간(분)
    const surCharge = fees[3]; // 단위 요금(원)
    
    return basicFee + Math.ceil((Math.max(time - basicTime, 0) / surTime)) * surCharge;
}