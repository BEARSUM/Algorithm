function solution(rsp) {
    
    const winRsp = {5:2, 2:0, 0:5}
    return [...rsp].map((el)=>winRsp[el]).join('')
}