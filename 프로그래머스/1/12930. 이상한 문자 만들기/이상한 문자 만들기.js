const makeWord =(str)=>{
    let word = '';
    [...str].map((el,i)=>{
        if(i%2) word+=el.toLowerCase();
        else word+=el.toUpperCase();
    })
    return word;
}

const solution=(s)=>{
    return s.split(' ').map((el,i)=>makeWord(el)).join(' ');

}