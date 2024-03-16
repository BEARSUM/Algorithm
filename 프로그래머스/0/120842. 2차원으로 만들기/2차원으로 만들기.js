function solution(num_list, n) {
    const result=[];
    for(let i=0; i<num_list.length; i+=n){
        const array = [];
        
        for(let j=0; j<n; j++){
            array.push(num_list[i+j]);
        }
        
        result.push(array);
    }
    return result;
}