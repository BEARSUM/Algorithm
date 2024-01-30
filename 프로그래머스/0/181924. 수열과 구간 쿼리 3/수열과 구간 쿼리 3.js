function solution(arr, queries) {
    const answer=[...arr];
    
    queries.map(([x,y])=>{
        [answer[x],answer[y]] = [answer[y],answer[x]];
    })
    
    return answer;
}