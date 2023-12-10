function solution(n) {
    const arr = Array(n).fill(Array(n).fill(0));
    return [...arr].map((el,i)=>el.map((el,j)=>i===j? 1:0));
    
}