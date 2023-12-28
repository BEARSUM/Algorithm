function solution(a, b) {
    let answer=0;
    a.map((el,i)=>{
        answer+=el*b[i];
    })
    return answer;
    
}