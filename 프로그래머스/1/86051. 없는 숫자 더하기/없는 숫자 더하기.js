function solution(numbers) {
    const totalSum = Array.from({length:10},(v,i)=>i)
                          .reduce((acc,cur)=>acc+cur);
    const numbersSum = numbers.reduce((acc,cur)=>acc+cur);
    return totalSum - numbersSum;
}