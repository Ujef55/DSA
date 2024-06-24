var intersection = function(nums1, nums2) {
    let index = 0;
    let ans = [];
    for(let i = 0; i<=nums1.length-1; i++) {
        for(let j = 0; j<=nums2.length-1; j++) {
            if(nums1[i] == nums2[j] && !ans.includes(nums1[i])) {
                ans[index] = nums1[i];
                index++;
            }
        }
    }
    return ans;
};