function solution(my_string, indices) {
    return [...my_string].map((str,i)=>{
        if(!indices.includes(i)) return str;
        else return '';
    }).join('');
}