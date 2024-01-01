function solution(strings, n) {
    return [...strings].sort((a,b)=>
                            a[n]!==b[n] ? a.charCodeAt(n)-b.charCodeAt(n):
                            a>b ? 1:-1);
}
