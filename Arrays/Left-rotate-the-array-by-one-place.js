// Left-rotate-the-array-by-one-place

let rotateByOnePlace = (arr) => {
    let index = 1;
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[index];
        index++;
    }
    arr[arr.length-1] = temp;
    return arr;
}

console.log(rotateByOnePlace([1,2,3,4,5]));