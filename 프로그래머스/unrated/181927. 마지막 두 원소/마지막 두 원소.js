function solution(num_list) {
    const n = num_list.length-1;
    let lastNum;
    if(num_list[n]>num_list[n-1]){
        lastNum = num_list[n]-num_list[n-1];
    }else{
        lastNum = num_list[n]*2;
    }
    return [...num_list,lastNum];
}