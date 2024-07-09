// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.



const searchInsert = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
   

    while (start <= end) {

        let mid = Math.floor(start + (end - start) / 2);

        if (target == nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            end = mid - 1;
        } else if (target > nums[mid]) {
            start = mid + 1;
        }
    }
    return start;
}

console.log(searchInsert([1,4,6,7,8,9,13,16,18], 3));