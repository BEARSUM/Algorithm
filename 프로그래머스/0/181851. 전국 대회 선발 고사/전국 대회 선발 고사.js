function solution(rank, attendance) {
    const studentsInAttendance =  [...rank].map((el,i)=>[el,i])
                                            .sort((a,b)=>a[0]-b[0])
                                            .filter(v=>attendance[v[1]]);
    const [a,b,c] = studentsInAttendance;
    return 10000*a[1]+100*b[1]+c[1];
}