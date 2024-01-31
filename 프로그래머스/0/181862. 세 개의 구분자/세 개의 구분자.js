function solution(myStr) {
    const myStrWithoutAbc = myStr.replace(/[abc]/g,' ')
                .replace(/\s+/g,' ')
                .trim()
                .split(' ');
   return !!myStrWithoutAbc[0]?myStrWithoutAbc:["EMPTY"];
}