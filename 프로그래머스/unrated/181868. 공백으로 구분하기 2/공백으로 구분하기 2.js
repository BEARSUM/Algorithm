function solution(my_string) {
    let answer=[];
    my_string.split(' ').map((el)=>{
        if(el!=='') answer.push(el);
    })
    return answer;
}