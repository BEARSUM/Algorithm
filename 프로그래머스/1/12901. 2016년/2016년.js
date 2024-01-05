const DAY={0:'SUN',1:'MON',2:'TUE',3:'WED',4:'THU',5:'FRI',6:'SAT'};

function solution(a, b) {
    const curDay = new Date(`2016-${a}-${b}`).getDay();
    return DAY[curDay];
    
}