function solution(n, slicer, num_list) {
    let result;
    if(n===1) result=num_list.slice(0,slicer[1]+1);
    if(n===2) result=num_list.slice(slicer[0]);
    if(n===3) result=num_list.slice(slicer[0],slicer[1]+1);
    if(n===4) result=num_list.slice(slicer[0],slicer[1]+1).filter((el,i)=>!(i%slicer[2]));
    
    return result;
}