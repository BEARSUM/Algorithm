function solution(my_string, queries) {
    let result=my_string;
    queries.forEach((idx)=>{
        const [from,to] = idx;
        const copyArr = [...result];
        const reversedStr = copyArr.slice(from,to+1).reverse().join('');
        copyArr.splice(from,to-from+1,reversedStr);
        result=copyArr.join('')
    })
    return result;
}
