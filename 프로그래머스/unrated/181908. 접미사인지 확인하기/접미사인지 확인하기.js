function solution(my_string, is_suffix) {
    const n = is_suffix.length;
    
    const suffix=my_string.slice(-1*n);
    return is_suffix===suffix ? 1:0;
}