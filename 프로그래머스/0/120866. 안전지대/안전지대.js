function solution(board) {
    const n=board.length;
    let row,col;
    
    const set = new Set();
    
    board.forEach((a,i)=>{
        a.forEach((b,j)=>{
            if(b){
                row=i;
                col=j;
                for(let i=row-1; i<=row+1; i++){
                    for(let j=col-1; j<=col+1; j++){
                        if(i>=0&&i<n&&j>=0&&j<n) set.add(`${i}${j}`);
                    }
                }
            }
            
        })
    })
    
    return n**2-[...set].length
}