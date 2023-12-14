function solution(myString, pat) {
    const i = myString.lastIndexOf(pat);
    return myString.slice(0,i)+pat;
}