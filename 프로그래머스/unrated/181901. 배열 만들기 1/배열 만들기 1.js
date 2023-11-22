function solution(n, k) {
    let arr = new Array(n).fill(null);
    arr=arr.map((el,idx)=>idx+1).filter(v=>v%k===0);
    
    return arr;
}