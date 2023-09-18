// You are given an integer array of size 'n' and an integer 's'.
// Your task is to return the list of all pairs of elements
// such as that each sum of elements of pair equal to 's'

// Note: each pair should be sorted.


let sum = 7
let pair = [];
const pairSum = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j ++) {
            if (arr[i] + arr[j] == sum) {
                pair = [arr[i], arr[j]];
                console.log(pair);
            }
        }
    }
}

pairSum([1,2,3,4,5,6]);