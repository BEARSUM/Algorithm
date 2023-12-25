function solution(arr, queries) {
    const answer=[...arr];
    queries.map((el,i)=>{
        for(let i=el[0]; i<=el[1]; i++){
            answer[i]+=1;
        }
    })
    return answer;
}