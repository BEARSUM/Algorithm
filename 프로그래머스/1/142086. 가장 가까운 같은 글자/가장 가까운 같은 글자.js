function solution(s) {
    const report = {};
    return [...s].map((el,i)=>{
        const prevIndex = report[el];
        report[el]=i;
        
        return (s.indexOf(el)!==i) ? i-prevIndex : -1;
    });

}