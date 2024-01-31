const isPowerOfTwo = (num)=>{
    let n = 0;
    while(num>2){
        num/=2;
        n+=1;
    }
    return [num===2,n+1];
}
function solution(arr) {
    const resultLength = 2**isPowerOfTwo(arr.length)[1];
    
    if(isPowerOfTwo(arr.length)[0]||resultLength===2) return arr;
    return Array(resultLength).fill(0).map((el,i)=>i<arr.length?arr[i]:el);
}
