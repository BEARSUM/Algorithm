const solution =(num,cnt=0)=>{
    
    if(num===1) return cnt;
    else if(cnt>=500) return -1;
    
    cnt+=1;
    if(num%2) return solution(num*3+1,cnt);
    else return solution(num/2,cnt);
    

}
    