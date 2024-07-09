var createTargetArray = function(nums, index) {
    let target = [];
    let j = 0;
    
    for (let i = 0; i<nums.length; i++) {
        target.splice(index[j], 0, nums[i]);
        j++;
    }

    return target;
};

console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]));