function solution(number) {
    return [...number].map(el=>+el).reduce((a,b)=>a+b)%9;
}