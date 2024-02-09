
const swap = (i, arr, minIndex) => {
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}

const ascendingSort = (arr) => {
    for(let i = 0; i<arr.length-1; i++) {
        let minIndex = i;
        for(let j = i+1; j<arr.length; j++) {
            if(arr[j]>arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(i, arr, minIndex);
    }
    return arr;
}

console.log(ascendingSort([5,3,6,2,1,4]));