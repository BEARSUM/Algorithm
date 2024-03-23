function solution(my_string) {
    return [...my_string].filter(char=>+char>=0).sort((a,b)=>a-b).map(Number);
}