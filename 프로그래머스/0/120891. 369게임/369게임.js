function solution(order) {
    let result=0;
    [...`${order}`].forEach((el)=>{
        if(el!=='0'&&(el*1)%3===0) result+=1;
    })
    return result;
}