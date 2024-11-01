function solution(phone_number) {
    const length = phone_number.length;
    
    return [...phone_number].map((number,index)=>index<length-4?'*':number)
                            .join('');
}