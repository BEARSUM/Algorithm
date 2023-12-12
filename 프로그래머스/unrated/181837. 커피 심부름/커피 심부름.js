function solution(order) {
    let answer=0;
    order.map((el)=>{
        el.includes("latte")?answer+=5000:answer+=4500
    })
    return answer;
}