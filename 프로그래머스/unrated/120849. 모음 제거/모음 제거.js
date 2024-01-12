const mo = ['a','e','i','o','u'];




function solution(my_string) {
    let result='';
    for(let j=0; j<my_string.length; j++){
        let item = my_string[j];
        let ismo = false;
    for(let i=0; i<mo.length; i++){
        if(item===mo[i]){
        ismo=true;
         }
    }
        if(!ismo){
            result+=item;
        }
    }
    return result;
}