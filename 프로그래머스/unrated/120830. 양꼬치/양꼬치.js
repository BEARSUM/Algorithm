function solution(n, k) {
    return 12000*n + 2000*(k-Math.floor(n/10));
}
//1. 10인분을 먹을때마다 음료수-1
//2. 금액= 12000*n + 2000*k