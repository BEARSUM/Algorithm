function solution(date1, date2) {
    
    const firstDate = new Date(...date1).getTime();
    const secondDate = new Date(...date2).getTime();
    
    return firstDate<secondDate ? 1 :0;
}