function solution(absolutes, signs) {
    return absolutes.map((el,i)=>signs[i]?el:-el).reduce((a,c)=>a+c);
    
}