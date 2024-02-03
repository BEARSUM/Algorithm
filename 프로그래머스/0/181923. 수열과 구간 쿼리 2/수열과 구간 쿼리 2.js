function solution(arr, queries) {
    return queries.map((el,i)=>{
        const [from,to,k]=el;
        const slicedArr = [...arr].slice(from,to+1).filter(el=>el>k);
        return slicedArr.length?Math.min(...slicedArr):-1;
    })
}