function solution(s) {
    let binaryX = s.toString(2);
    let [cnt,totalZeroCnt]=[0,0];
    while(binaryX!=='1'){
        let removeZero = '';
        let zeroCnt=0; 
        [...binaryX].forEach((num)=>num==='0'?zeroCnt++:removeZero+=num);
        totalZeroCnt+=zeroCnt;
        binaryX=removeZero.length.toString(2);
        cnt++;
    }
    return [cnt,totalZeroCnt];
}