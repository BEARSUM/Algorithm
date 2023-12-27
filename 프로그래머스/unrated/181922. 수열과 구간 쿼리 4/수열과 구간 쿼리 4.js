function solution(arr, queries) {
    queries.map((el,i)=>{
        for(let j=el[0]; j<=el[1]; j++){
            if(j%el[2]===0) arr[j]+=1;
        }
    })
    return arr;
}