function solution(age) {
    const planet_age = ["a","b","c","d","e","f","g","h","i","j"];
    return [...`${age}`].map((char)=>planet_age[char*1])
                        .join('');
    
}
