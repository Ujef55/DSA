// Find First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in non-decreasing order,
// find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

const search = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    let firstPosition = -1;
    let lastPosition = -1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (target == arr[mid]) {
            firstPosition = mid;
            end = mid - 1;
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    start = 0;
    end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (target == arr[mid]) {
            lastPosition = mid;
            start = mid + 1;
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return [firstPosition, lastPosition];

}

console.log(search([5,7,7,8,8,10], 8));