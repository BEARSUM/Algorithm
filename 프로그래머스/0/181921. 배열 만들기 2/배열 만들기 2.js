function solution(l, r) {
    const n = r-l+1;
    const numArr = Array.from({length:n},(x,i)=>l+i);
    const filteredArr= numArr.filter(number=>{
        const stringNum = String(number);
        return [...stringNum].every(num=>num==='5'||num==='0');
    })
    return filteredArr.length ? filteredArr : [-1];
}
