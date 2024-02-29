// 피자 1판 : 6조각
// 사람 : n명
// 조건 : 피자가 남지 않고 똑같은 수의 조각을 나눠먹어야함
// 구해야할 것 : 주문 할 피자의 최소 수량
function solution(n) {
    let pizza=1;
    while((6*pizza)%n){
        pizza++
    }
    return pizza;
}
