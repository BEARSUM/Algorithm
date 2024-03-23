const factorial =(n)=>{
    return n>=1?n*factorial(n-1):1; 
}
function solution(n) {
    let count = 1;
    while(factorial(count)<=n){
        count++
    }
    return count-1;
}