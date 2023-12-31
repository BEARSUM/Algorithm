function solution(arr1, arr2) {
    return arr1.map((el,i)=>el.map((el,j)=>el+arr2[i][j]))
}