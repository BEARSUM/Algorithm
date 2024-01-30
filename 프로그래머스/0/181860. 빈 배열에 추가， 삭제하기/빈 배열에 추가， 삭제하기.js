function solution(arr, flag) {
    const X = [];
    [...flag].map((boolean,i)=>{
        if(boolean){
            Array(arr[i]*2).fill(null).map((el)=>{
                X.push(arr[i]);
            })
        }else{
            Array(arr[i]).fill(null).map((el)=>{
                X.pop(arr[i]);
            })
        }
    })
    return X;
}