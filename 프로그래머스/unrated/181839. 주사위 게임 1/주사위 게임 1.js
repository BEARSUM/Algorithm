function solution(a, b) {
    //홀+홀=짝
    //짝+짝=짝
    //홀+짝=홀
    if((a+b)%2) return 2*(a+b);
    else if(a%2) return a*a+b*b;;
    return Math.abs(a-b);
}