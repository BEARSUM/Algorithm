function solution(names) {
    let result=[];
    const n=Math.ceil(names.length/5)
    for(let i=0; i<n; i++){
        result.push(names[5*i]);
    }
    return result;
}