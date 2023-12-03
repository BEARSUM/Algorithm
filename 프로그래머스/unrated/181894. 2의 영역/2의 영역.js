function solution(arr) {
    let index = [];
    if(!arr.includes(2)) return [-1];
    else {
        arr.map((el,i)=>{
            if(el===2) index.push(i);
        })
    }
    return arr.slice(index[0],index[index.length-1]+1)
}