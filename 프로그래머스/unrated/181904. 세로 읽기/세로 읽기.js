function solution(my_string, m, c) {
    //sol1
    // const count = my_string.length/m;
    // let answer='';
    // for(let i=0; i<count; i++){
    //     answer+=my_string[(c-1)+m*i];
    // }
    // return answer;
    
    //sol2
    return [...my_string].filter((_,i)=>i%m===c-1).join('');
}