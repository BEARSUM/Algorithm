function solution(a, b, c, d) {
    const nums = [a,b,c,d];
    const map = new Map();
    
    nums.forEach((num,i)=>{
        map.set(num,(map.get(num)||0)+1);
    });
    
    const sortedMap = [...map].sort((a,b)=>b[1]-a[1]);
    
    if(map.size===1) {
        const p = sortedMap[0];
        return 1111*p[0];
    }else if(map.size===2){
        const [p,q] = [sortedMap[0],sortedMap[1]]
        return p[1]===q[1]?(p[0]+q[0])*Math.abs(p[0]-q[0]):(10 * p[0] + q[0])**2;
    } else if(map.size===3) {
        const [p,q,r] = [sortedMap[0],sortedMap[1],sortedMap[2]]
        return q[0]*r[0];
    } else return Math.min(...nums);
}