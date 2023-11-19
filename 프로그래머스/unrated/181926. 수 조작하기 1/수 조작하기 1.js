function solution(n, control) {
    for(const s of control){
        if(s==='w') n+=1;
        else if(s==='s') n-=1;
        else if(s==='d') n+=10;
        else if(s==='a') n-=10;
    }
    return n;
}