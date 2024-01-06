function solution(nums) {
    const types = new Set(nums);
    return nums.length/2<types.size ? nums.length/2 : types.size;
}