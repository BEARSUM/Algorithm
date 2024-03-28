function solution(s1, s2) {
    let cnt = 0;
    s1.forEach((str)=>{
        if(s2.includes(str)) cnt++;
    })
    return cnt;
}