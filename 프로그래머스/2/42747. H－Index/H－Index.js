function solution(citations) {
    const arr = [...citations].sort((a,b)=>b-a);
    for(let i =arr.length-1; i>=0; i--){
        if(arr[i]>=i+1) return i+1;
    }
    return 0;
    
}