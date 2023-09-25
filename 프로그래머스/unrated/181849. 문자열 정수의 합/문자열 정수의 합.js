function solution(num_str) {
    return num_str.split('').map(el=>el*1).reduce((a,c)=>a+c);
}