function solution(num_list) {
    const sum = num_list.reduce((acc,cur)=>acc+cur);
    const mul = num_list.reduce((acc,cur)=>acc*cur);
    return mul<sum**2 ? 1 : 0;
}