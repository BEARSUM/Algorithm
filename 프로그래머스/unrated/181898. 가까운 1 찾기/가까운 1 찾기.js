function solution(arr, idx) {
    const newArray =[...arr.splice(idx)];
    
    if(!newArray.includes(1)) return -1;
    for(let i=0; i<newArray.length; i++){
        if(newArray[i]===1) return i+idx;
    }
}