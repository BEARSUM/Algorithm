function solution(num_list) {
    return num_list.reduce((acc,cur)=>acc+makeOne(cur),0);
}
const makeOne = (num)=>{
    let i = 0;
    while(num!==1){
        if(num%2) num=(num-1)/2;
        else num=num/2;
        i+=1;
    }
    return i;
}