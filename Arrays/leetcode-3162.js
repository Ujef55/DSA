var numberOfPairs = function(nums1, nums2, k) {
    let n = nums1.length;
    let m = nums2.length;
    let pair = 0;
 
     for (let i = 0; i<n; i++) {
         for (let j = 0; j<m; j++) {
             if (nums1[i]%(nums2[j]*k) == 0) {
                 pair++;
             }
         }
     }
     return pair;
 };

 console.log(numberOfPairs([1,3,4], [1,3,4], 1))