function solution(n) {
    return Array.from({length:n},(v,i)=>i+1)
                .filter((num)=>n%num===0)
                .length;
                
    
}