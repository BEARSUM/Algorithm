function solution(myString, pat) {
    const reverseString=myString.split('').map((el)=>el==="A"?"B":"A").join('');
    const newArr = reverseString.split(pat);
    return newArr.length>1 ?  1 : 0;
}