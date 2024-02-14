// Given an array of integers and a position
// you have to reverse an array after that position
// with out using pre built reverse method.

const reverseArray = (arr, m) => {
    let start = 0;
    let end = arr.length - 1;

    start = m+1;
    
    while (start<=end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    
        start++
        end--
    }
    return arr;
    
}

console.log(reverseArray([11,7,3,12,4], 2));