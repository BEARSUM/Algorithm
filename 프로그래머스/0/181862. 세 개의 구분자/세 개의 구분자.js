function solution(myStr) {
    const myStrWithoutAbc = myStr.split(/[abc]/)
                                 .filter(str=>str);
   return myStrWithoutAbc.length?myStrWithoutAbc:["EMPTY"];
}