const removeDups = (numbers) => {
    const set = new Set(numbers);
    return set;
}
// console.log(removeDups([1,2,3,2,1,3,2,1,4,3,2,4,3,4,4,5,4,5,4,5,6,7,6,5,4,6,7,8,9,9,5,9]));


// O(n) space complexity solution for leetcode 26
let removeDuplicates = function(nums) {
    let index = 1;
    for(let i = 0; i<nums.length-1; i++) {
        if (nums[i] != nums[i+1]) {
            nums[index] = nums[i+1];
            index++;
        }
    }
    return index;
};

console.log(removeDuplicates([2,2,2,2,3,3,4,4,5,7,8]));


