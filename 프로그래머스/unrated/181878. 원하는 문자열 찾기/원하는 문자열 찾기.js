function solution(myString, pat) {
    const lowerString=myString.toLowerCase();
    const lowerPat=pat.toLowerCase();
    
    const newArr=lowerString.split(lowerPat);
    return newArr.length>1 ? 1 : 0;
}