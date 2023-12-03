function solution(arr) {
    // solution 1
    // let index = [];
    // if(!arr.includes(2)) return [-1];
    // else {
    //     arr.map((el,i)=>{
    //         if(el===2) index.push(i);
    //     })
    // }
    // return arr.slice(index[0],index[index.length-1]+1)
    
    // solution 2
    const from = arr.indexOf(2);
    const to = arr.lastIndexOf(2);
    
    if(from===-1) return [-1];
    return arr.slice(from,to+1);
}