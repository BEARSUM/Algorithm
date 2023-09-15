function solution(my_string, is_prefix) {
    const prefixLength = is_prefix.length;
    return my_string.slice(0,prefixLength) === is_prefix ? 1 : 0;
}