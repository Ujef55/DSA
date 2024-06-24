let revArr = (start, end, arr) => {
    while (start<end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr
}

let rotateK = (arr, k) => {
    k = k % arr.length;
    let n = arr.length - 1;
    revArr(0, n, arr);
    revArr(0, k -1, arr);
    revArr(k, n, arr)

    return arr;
}

console.log(rotateK([1,2,3,4,5,6,7], 3));
console.log(rotateK([-1,-100,3,99], 2));