function solution(arr, n) {
    return arr.map((el,i)=> arr.length%2 !== i%2 ? el+n : el);
}