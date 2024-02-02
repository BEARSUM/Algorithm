function solution(arr) {
    const stk=[];
    let i=0;
    while(i<arr.length){
        if(stk.length && stk[stk.length-1]===arr[i]){
            stk.pop();
            i+=1;
        }else{
            stk.push(arr[i]);
            i+=1;
        }
    }
    return stk.length?stk:[-1];
}