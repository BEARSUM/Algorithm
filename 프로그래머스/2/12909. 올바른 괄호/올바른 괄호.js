function solution(s){
    let answer = true;
    const stack=[];
    for(const x of s){
        if(stack.length>s.length-stack.length) return false;
        if(x===")"){
            if(!stack.length) return false;
            stack.pop();
        }else{
            stack.push(x);
        }
    }
    if(stack.length) return false;
    return answer;
}