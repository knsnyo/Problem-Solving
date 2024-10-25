function solution(survey, choices) {
	const MBTI_KAKAO = {
        R: 0, T: 0,
        C: 0, F: 0,
        J: 0, M: 0,
        A: 0, N: 0,
    }
    for(let i = 0; i < survey.length; i++) {
        const [left, right] = survey[i].slice('');
        switch(choices[i]) {
            case 1:
                MBTI_KAKAO[left] += 3;
                break;
            case 2:
                MBTI_KAKAO[left] += 2;
                break;
            case 3:
                MBTI_KAKAO[left] += 1;
                break;
            case 5:
                MBTI_KAKAO[right] += 1;
                break;
            case 6:
                MBTI_KAKAO[right] += 2;
                break;
            case 7:
                MBTI_KAKAO[right] += 3;
                break;
            default:
                break;
        }
    }
    var answer = '';
    answer += MBTI_KAKAO.R >= MBTI_KAKAO.T ? 'R' : 'T'
    answer += MBTI_KAKAO.C >= MBTI_KAKAO.F ? 'C' : 'F'
    answer += MBTI_KAKAO.J >= MBTI_KAKAO.M ? 'J' : 'M'
    answer += MBTI_KAKAO.A >= MBTI_KAKAO.N ? 'A' : 'N'
    
    return answer;
}