function solution(my_string, m, c) {
    const count = my_string.length/m;
    let answer='';
    for(let i=0; i<count; i++){
        answer+=my_string[(c-1)+m*i];
    }
    return answer;
}