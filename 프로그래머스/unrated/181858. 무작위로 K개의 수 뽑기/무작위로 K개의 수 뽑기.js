function solution(arr, k) {
    const uniqueArr= arr.filter((v,i)=>arr.indexOf(v)===i);
    
    if(uniqueArr.length<k){
        return [...uniqueArr,...Array(k-uniqueArr.length).fill(-1)];
    }
    return uniqueArr.slice(0,k);
}