function solution(n) {
    return Array(n).fill(0).map((el,i)=>i%2?'박':'수').join('');
    
}