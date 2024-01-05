function solution(a, b) {
    const curDate = new Date(`2016-${a}-${b}`);
    return curDate.toString().slice(0,3).toUpperCase();
    
}