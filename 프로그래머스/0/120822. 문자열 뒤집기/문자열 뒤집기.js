function solution(my_string) {
    return [...my_string].map((char,i)=>my_string[my_string.length-i-1]).join('');
    
}