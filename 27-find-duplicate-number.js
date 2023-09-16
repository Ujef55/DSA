// You are given an array containing integers,
// there is a single integer that is present twice in the array
// your task is to find that number.

// NOTE : A duplicate number is always present in the array.


const findDuplicate = (arr) => {
    for (let i = 0; i < arr.length; i++) {
         for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i] || arr[j];
            }
         }
    }
    return "No duplicate element found"
}

console.log(findDuplicate([1,3,2,4,5,2]));