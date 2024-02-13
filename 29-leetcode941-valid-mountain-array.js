// Given an array of integers arr, return true if and only 
// if it is a valid mountain array.

const isValidMountainArray = (arr) => {
    if (arr.length < 3) return false;
    let i = 0;
    let n = arr.length - 1;

    while (i<n && arr[i]<arr[i+1]) i++;

    if (i == 0 || i == n) return false;

    while (i<n && arr[i]>arr[i+1]) i++;
    
    if (i == n) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isValidMountainArray([0,1,2,1,2]));