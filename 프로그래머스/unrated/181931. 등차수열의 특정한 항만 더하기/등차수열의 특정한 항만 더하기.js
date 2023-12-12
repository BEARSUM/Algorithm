function solution(a, d, included) {
    let answer=0;
    const func =(n)=>{
        return a+d*n;
    }
    included.map((el,i)=>{
        if(el) answer+=func(i);
    })
    return answer;
}