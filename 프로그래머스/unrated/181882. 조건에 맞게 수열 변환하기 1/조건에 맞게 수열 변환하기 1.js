function solution(arr) {
    const answer=arr.map((el)=>{
        if(el>=50&&el%2===0) return el/2;
        else if(el<=50&&el%2!==0) return el*2;
        return el;
    })
    return answer;
}