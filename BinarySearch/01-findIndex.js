const findElement = (arr, target) => {
        let start = 0;
        let end = arr.length - 1;

        while (start <= end) {
            let mid = Math.floor(start + (end - start) / 2);

            if (target == arr[mid]) {
                return mid;
            } else if (target < arr[mid]) {
                end = mid - 1;
            } else if (target > arr[mid]) {
                start = mid + 1;
            }
        }
    return 'Element not found';
}

console.log(findElement([1,5,8,12,17,22,28,35,49], 12));