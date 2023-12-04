function solution(myString) {
    return [...myString].map((el)=>el.charCodeAt()<'l'.charCodeAt()?'l':el).join('');
}