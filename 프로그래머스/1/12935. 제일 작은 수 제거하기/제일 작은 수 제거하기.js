function solution(arr) {
    const min = Math.min(...arr);
    const filteredArray = [...arr].filter(x=>x!==min);
    
    return filteredArray.length<=1 ? [-1] : filteredArray;   
}