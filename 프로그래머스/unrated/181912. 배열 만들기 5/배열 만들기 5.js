function solution(intStrs, k, s, l) {
    return [...intStrs].map((el,i)=>el.slice(s,s+l)*1).filter(v=>v>k);
}