function solution(my_string) {
    const idxArr = [...my_string].map((char)=>{
        const charToAscii = char.charCodeAt();
        if(charToAscii<97) return charToAscii-65;
        else return charToAscii-97+26;
    })
    const result = Array(52).fill(0);
    idxArr.forEach((idx)=>{
        result[idx] += 1;
    });
    
    return result;
}