function solution(arr, n) {
    const arrLength = arr.length;
    if(arrLength%2) return [...arr].map((el,i)=>!(i%2) ? el+n : el);
    else return [...arr].map((el,i)=>(i%2) ? el+n : el);
}