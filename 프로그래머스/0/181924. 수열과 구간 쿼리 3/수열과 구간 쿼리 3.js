function solution(arr, queries) {
    const answer=[...arr];
    
    queries.map((el)=>{
        const [x,y] = [answer[el[0]],answer[el[1]]]
        answer[el[0]]=y;
        answer[el[1]]=x;
    })
    
    return answer;
}