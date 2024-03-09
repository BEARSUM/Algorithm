//장군개미: 5, 병정개미: 3, 일개미:1
function solution(hp) {
    let antCnt=0;
    const power=[5,3,1];
    let currentHp = hp;
    
    for(let i=0; i<power.length; i++){
        if(currentHp<power[i]) continue; 
        const currentAntCnt = parseInt(currentHp/power[i]);
        antCnt+=currentAntCnt;
        currentHp-=currentAntCnt*power[i];
        
    }
    
    return antCnt;

}