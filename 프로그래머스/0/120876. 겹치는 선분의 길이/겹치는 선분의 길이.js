//다시 풀기
function solution(lines) {
    //1. 주어진 선분을 1단위로 arr에 넣는다.
    const arr=[];
    lines.forEach(([x1,x2])=>{
        for(let i=x1;i<x2; i++){
            arr.push(`${i}${i+1}`);
        }
    })
    //2. 겹치는 선분을 카운트한다.
    const cnt = new Map();
    [...arr].forEach((line)=>{
        cnt.set(line,(cnt.get(line)||0)+1);
    })
    //3. 카운트가 1을 초과하는 경우를 세서 set에 추가 (중복 제거).
    const set = new Set();
    arr.filter(line=>cnt.get(line)>1).forEach(line=>set.add(line));
    
    return set.size;
}