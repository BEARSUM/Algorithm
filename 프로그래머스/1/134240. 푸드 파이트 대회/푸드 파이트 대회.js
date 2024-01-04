function solution(food) {
    const foodOrder = [...food].map((el,i)=>{
        if(i>0) return `${i}`.repeat(Math.floor(el/2));
        return `${i}`;
                            }).slice(1);
    return [...foodOrder,0,...foodOrder.reverse()].join('');
    
}