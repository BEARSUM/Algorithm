function solution(k, score) {
    let answer = [];
    let honer = [];
    
    score.forEach(num => {
        honer.push(num);
        
        honer.sort((a,b) => b-a).splice(k);
        
        answer.push(Math.min.apply(null, honer));
    });

    return answer;
}
