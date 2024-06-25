let singleNumber = (nums) => {
        let value = 0;
        for (let i = 0; i<nums.length; i++) {
            value = value^nums[i];
        }
        return value;
}

console.log(singleNumber([4,1,2,1,2,4,9]));