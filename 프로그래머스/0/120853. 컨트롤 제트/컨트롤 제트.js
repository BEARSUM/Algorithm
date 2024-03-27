function solution(s) {
    const arr = s.split(' ');
    const result =[];
    
    arr.forEach((num)=>{
        if(num==='Z'){
            result.pop();
        }else{
            result.push(num);
        }
    })
    
    return result.reduce((acc,cur)=>acc*1+cur*1,0);
}