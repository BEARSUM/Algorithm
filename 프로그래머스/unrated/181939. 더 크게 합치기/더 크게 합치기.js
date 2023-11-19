function solution(a, b) {
    const stringA=String(a);
    const stringB=String(b);
    const sumAB=stringA+stringB;
    const sumBA=stringB+stringA;
    
    return sumAB>sumBA ? sumAB*1:sumBA*1;
}