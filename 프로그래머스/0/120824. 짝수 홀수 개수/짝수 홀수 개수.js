function solution(num_list) {
    
    const result=[0,0];
    [...num_list].forEach((num)=>num%2?result[1]++:result[0]++);
    return result;
    
}