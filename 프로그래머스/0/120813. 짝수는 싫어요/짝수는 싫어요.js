function solution(n) {
    const length=n%2?Math.floor(n/2)+1:n/2;
    return Array.from({length:length}).fill(1).map((num,i)=>2*i+1);
}