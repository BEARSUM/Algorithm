function solution(numbers) {
    const result = new Set();
    numbers.map((number1,idx1)=>{
        numbers.map((number2,idx2)=>{
            if(idx1!==idx2) result.add(number1+number2);
        })
    });

    return Array.from(result).sort((a,b)=>a-b);
    
}