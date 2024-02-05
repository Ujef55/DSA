// You are given an array of characters letters that is sorted in non-decreasing order, 
// and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. 
// If such a character does not exist, return the first character in letters.


// Constraints:

// 2 <= letters.length <= 104
// letters[i] is a lowercase English letter.
// letters is sorted in non-decreasing order.
// letters contains at least two different characters.
// target is a lowercase English letter.

var nextGreatestLetter = function(arr, k) {
    let start = 0;
    let end = arr.length - 1;
    let ans = arr[0];
    let mid = Math.floor(start+(end-start)/2);

    while (start<=end) {
        if (k == arr[mid] || k > arr[mid]) {
            start = mid + 1;
        } else if (k < arr[mid]) {
            ans = arr[mid];
            end = mid - 1;
        }
        mid = Math.floor(start+(end-start)/2);
    }
    return ans;
        
};

console.log(nextGreatestLetter(["c","f","j"], 'a'));
