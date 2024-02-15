const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    lowerStr = str.toLowerCase();
    result = [...str].map((char,i)=>char===lowerStr[i]?char.toUpperCase():lowerStr[i]).join('');
    console.log(result);
});