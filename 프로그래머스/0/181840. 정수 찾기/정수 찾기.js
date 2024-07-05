function solution(num_list, n) {
    return num_list.some((a) => n === a) ? 1 : 0;
}