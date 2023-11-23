function solution(myString, pat) {
    // const reverseString=myString.split('').map((el)=>el==="A"?"B":"A").join('');
    // const newArr = reverseString.split(pat);
    // return newArr.length>1 ?  1 : 0;
    
    const reverseString=[...myString].map((el)=>el==="A"?"B":"A").join('');
    return reverseString.includes(pat) ? 1 : 0;
}