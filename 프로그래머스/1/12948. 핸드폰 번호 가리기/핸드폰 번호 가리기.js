function solution(phone_number) {
    return [...phone_number].map((el,i)=>i>=phone_number.length-4?el:'*')
                            .join('');

}