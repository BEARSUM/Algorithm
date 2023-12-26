function solution(num_list) {
    //1.뒤에서 부터 하나씩 꺼낸다.
    //2.새 배열에 넣어준다.
    let answer =[];
    for(let i=num_list.length-1; i>=0; i--){
        let item = num_list[i];
        answer.push(item);
    }
    return answer;
}