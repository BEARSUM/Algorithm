function solution(s) {
    
    return [...s].map((el,i)=>{
        const prevIndex = [...s].slice(0,i).lastIndexOf(el);
    
        return prevIndex===-1 ? prevIndex:i-prevIndex;
    });

}