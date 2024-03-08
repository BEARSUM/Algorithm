function solution(n) {
    return Array.from({length:parseInt(n/2)},(n,i)=>2*(i+1)).reduce((acc,cur)=>acc+cur,0);
    
}