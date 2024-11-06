function solution(price, money, count) {
    const priceArray = Array.from({length:count},(v,idx)=>(idx+1)*price);
    const totalMoney = priceArray.reduce((acc,cur)=>acc+cur,0);
    
    const shortfall = totalMoney-money;
    
    return shortfall>0 ? shortfall:0;
}