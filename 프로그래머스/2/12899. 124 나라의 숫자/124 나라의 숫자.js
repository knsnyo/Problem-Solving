function solution(n) {
    let 정답 = '';
    const 변환 = { 0: 4 };
    while (n) {
        const 나머지 = n % 3
        const 확인 = 변환[나머지] ?? 나머지
        정답 += `${확인}`
        n -= 나머지 === 0 ? 3 : 나머지
        n /= 3
    }
    
    return 정답.split('').reverse().join('')
}