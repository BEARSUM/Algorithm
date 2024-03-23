
function solution(my_string) {
    return [...my_string].reduce((acc,cur)=>+cur>0?acc*1+cur*1:acc,0);
}