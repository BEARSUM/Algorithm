function solution(myString, pat) {
    return [...myString].reduce((acc,cur,i)=>
        (myString.slice(i,i+pat.length)===pat) ? acc+1 : acc
    ,0)
}