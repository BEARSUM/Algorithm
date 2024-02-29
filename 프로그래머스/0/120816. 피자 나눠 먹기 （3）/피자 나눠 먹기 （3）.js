//slice: 2~10조각
//n: 먹는 사람 수
//조건: n명이 최소 한 조각 이상 먹는다.
//답: 최소 피자 판 수는?
function solution(slice, n) {
    const pizza = Math.ceil(n/slice);
    return pizza;
}