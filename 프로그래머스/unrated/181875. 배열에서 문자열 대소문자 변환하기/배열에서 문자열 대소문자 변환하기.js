function solution(strArr) {
    const answer=strArr.map((el,idx)=>idx%2?el.toUpperCase():el.toLowerCase());
    return answer;
}