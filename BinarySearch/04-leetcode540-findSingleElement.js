const singleElement = (nums) => {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        if (nums[start] == nums[start + 1]) {
            start = start + 2;
        } else if (nums[end] == nums[end]) {
            end = end - 2;
        }
    }
    return nums[start];
}

console.log(singleElement([1,1,2,2,3,7,7,8,8]));