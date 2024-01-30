function solution(board, k) {
    let answer=0;
    board.map((el,i)=>el.map((el,j)=>{
        if(i+j<=k) answer+=board[i][j];
    }));
    return answer;
}