function solution(num_list) {
    const first = num_list.pop();
    const second = num_list.pop();
    num_list.push(second);
    num_list.push(first);
    num_list.push(first > second ? first - second : first * 2)
    return num_list;
}