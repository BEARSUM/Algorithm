function solution(n) {
    let answer=n+1;
    while(true){
        const a=[...n.toString(2)].filter(char=>char==='1').join('');
        const b=[...answer.toString(2)].filter(char=>char==='1').join('');
        if(a===b) return answer;
        answer++;
    }
   
}