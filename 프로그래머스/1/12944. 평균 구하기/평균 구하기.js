function solution(arr) {
    // let sum =0;
    // for(let i=0; i<arr.length;i++){
    //     sum += arr[i];
    // }
    // const answer= sum/arr.length;
    // return answer;
    
    //2번째 풀이
    return arr.reduce((a,b)=>a+b)/arr.length;
}