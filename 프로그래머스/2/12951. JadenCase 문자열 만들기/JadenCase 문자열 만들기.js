function solution(s) {
    const smallString = s.toLowerCase();
    return [...smallString].map((char,i)=>{
        if(!i) return char.toUpperCase();
        else if(s[i-1]===' ') return char.toUpperCase();
        return char;
    }).join('');
    
}