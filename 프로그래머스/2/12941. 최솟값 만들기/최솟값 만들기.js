function solution(A,B){
    const ascendingA = A.sort((a,b)=>a-b);
    const descendingB = B.sort((a,b)=>b-a);
    
    return ascendingA.reduce((acc,cur,i)=>acc+cur*descendingB[i],0);

}