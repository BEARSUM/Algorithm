function solution(a, b, c) {
    const arrA=[a,b,c].filter(v=>v===a);
    const arrB=[b,c].filter(v=>v===b);
    
    if(arrA.length===3) return (a+b+c)*(a**2+b**2+c**2)*(a**3+b**3+c**3);
    else if(arrA.length===2||arrB.length===2) return (a+b+c)*(a**2+b**2+c**2);
    else return a+b+c;
}