function solution(arr) {
    
    const min = Math.min(...arr);
    if(arr.length===1) return [-1];
    else return [...arr].filter(v=>v!==min);
    
    }