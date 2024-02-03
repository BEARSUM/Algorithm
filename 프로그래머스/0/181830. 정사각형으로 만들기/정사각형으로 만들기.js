function solution(arr) {
    const x = arr.length;
    const y = arr[0].length;
    const n = x>y?x:y;
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    
    arr.forEach((outer,i)=>{
        outer.forEach((inner,j)=>{
            result[i][j]=inner;
        })
    })
    return result;
}