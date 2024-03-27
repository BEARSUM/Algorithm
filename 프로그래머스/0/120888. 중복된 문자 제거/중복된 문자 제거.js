function solution(my_string) {
    const result =[];
    [...my_string].forEach((char)=>{
        if(!result.includes(char)) result.push(char);
    })
    return result.join('');
}