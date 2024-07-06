const peakIs = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor(start + (end - start) / 2);
   
    while (start < end) {
        if (arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        } else if (arr[mid] > arr[mid + 1]) {
            end = mid;
        }
        mid = Math.floor(start + (end - start) / 2);
    }
    return mid;
}

console.log(peakIs([1,4,9,17,22,44,13,5,0]));