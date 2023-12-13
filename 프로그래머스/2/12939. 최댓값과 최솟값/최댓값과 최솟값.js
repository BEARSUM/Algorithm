function solution(s) {
    // const numbers = s.split(' ').sort((a,b)=>(+a)-(+b));
    // return numbers[0]+' '+numbers[numbers.length-1]
    
    //sol2
    const numbers = s.split(' ');
    return Math.min(...numbers)+' '+Math.max(...numbers)
}