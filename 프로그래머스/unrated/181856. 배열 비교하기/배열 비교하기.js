function solution(arr1, arr2) {
    const n1 = arr1.length;
    const n2 = arr2.length;
    
    const sum1 = arr1.reduce((a,b)=>a+b);
    const sum2 = arr2.reduce((a,b)=>a+b);
    
    if(n1!==n2) return n1>n2 ?  1 : -1;
    if(sum1-sum2){
        return sum1>sum2? 1 : -1;
    }
    return 0;
    
}