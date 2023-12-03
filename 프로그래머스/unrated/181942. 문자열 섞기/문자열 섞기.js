function solution(str1, str2) {
    let answer='';
    str1.split('').map((el,i)=>{
        answer+=el;
        answer+=str2[i];
    })
    return answer;
}