function solution(numbers, direction) {
    const copyNums = [...numbers];
    if(direction==='right'){
        copyNums.unshift(copyNums.pop());
    }else{
        copyNums.push(copyNums.shift());
    }
    
    return copyNums;
}
