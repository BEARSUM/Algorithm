function solution(n) {
    return Array(n).fill(1).map((el,i)=>i+1).filter(v=>v%2);

}