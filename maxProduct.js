
function maxProd(nums){
    let result = 1
    for(let i=0;i<nums.length;i++){
        console.log(nums[i]);
        result = nums[i] * result
    }
    return {result, nums}
}

console.log(maxProd([1, 2, 10]));
