const bubbleSort = (arr) => {
    for(let i = 1; i<arr.length; i++) {
        let swapping = false;
        for(let j = 0; j<arr.length-1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapping = true;
            }
        }
        if (!swapping) {
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([6,3,4,5,1,2]));

