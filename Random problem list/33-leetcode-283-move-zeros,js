// Given an integer array nums,
//  move all 0's to the end of it while 
//  maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


const moveZeros = (arr) => {
    let i = 0;
    
    for(let j = 0; j<arr.length; j++) {
        if (arr[j] !== 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++; 
        }
    }
    return arr;
}

console.log(moveZeros([0,1,0,5,13]));