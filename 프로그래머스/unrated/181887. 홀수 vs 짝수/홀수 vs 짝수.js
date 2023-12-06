function solution(num_list) {
    let even=0;
    let odd=0;
    num_list.map((el,i)=>{
        i%2 ? odd+=el : even+=el
    })
    return even > odd ? even : odd;
}