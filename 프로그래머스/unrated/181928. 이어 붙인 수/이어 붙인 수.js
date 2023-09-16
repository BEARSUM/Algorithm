function solution(num_list) {
    let odd=[];
    let even=[];
    let sumOdd='';
    let sumEven='';
    num_list.forEach((el)=>{el%2===1?odd.push(el):even.push(el)});
    console.log(odd,even);
    odd.forEach((el)=>{sumOdd+=String(el)});
    even.forEach((el)=>{sumEven+=String(el)});
    console.log(sumOdd,sumEven);
    return sumOdd*1+sumEven*1;
}