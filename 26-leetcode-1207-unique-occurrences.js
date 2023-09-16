// Given an array of integers arr, 
// return true if the number of occurrences of each value in the array is unique
// or false otherwise.

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences,
//              2 has 2
//              and 3 has 1. 
//              No two values have the same number of occurrences.


const uniqueOccurrences = (arr) => {
    let map = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
             map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    

    let arrFromMap = [...map.values()];
    let mySet = new Set(arrFromMap);
    mySet = Array.from(mySet);

    console.log(arrFromMap);
    console.log(mySet);

    if (arrFromMap.length === mySet.length) {
        return true;
    }
    return false;
}

console.log(uniqueOccurrences([1,2,2,1,1,3]))

