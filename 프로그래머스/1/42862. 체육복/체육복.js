function solution(n, lost, reserve) {
    let copyLost=[...lost].sort();
    let copyReserve = [...reserve].sort();
    reserve.forEach((el,idx)=>{
        if(copyLost.includes(el)) {
            copyLost=copyLost.filter((v)=>v!==el);
            copyReserve=copyReserve.filter((v)=>v!==el);
        }
    });
    console.log(copyLost);
    copyReserve.forEach((el,idx)=>{
        for(let i=0; i<copyLost.length; i++){
                if(copyLost[i]===el-1||copyLost[i]===el+1){
                    copyLost=copyLost.filter((v)=>v!==copyLost[i]); 
                    console.log(copyLost);
                    break;
                } 
            }
    })
    return n-copyLost.length;
}                             
                         