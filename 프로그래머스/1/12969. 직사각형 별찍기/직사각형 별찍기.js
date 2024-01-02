process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {

    const arr=data.split(' ').map(el=>+el);
    const n=arr[0],m=arr[1];
    const row='*'.repeat(n)+'\n';
    
    console.log(row.repeat(m));
    
    
});