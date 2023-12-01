function solution(binomial) {
    const arr=binomial.split(' ');
    
    const operator=arr[1];
    switch (operator) {
      case '+': 
        return arr[0]*1 + arr[2]*1;
        break;
      case "-":
        return arr[0] - arr[2];
        break;
      case "*":
        return arr[0] * arr[2];
        break;
    }
}