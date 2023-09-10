// leetcode 1281
// Given an integer number n,
// return the difference between 
// the product of its digits and the sum of its digits.


// Example :
// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

let substractProductAndSum = (n) => {
    let newNum = String(n).split('').map(n => Number(n));

    let product = 1;
    let sum = 0;

    for (let i = 0; i < newNum.length; i++) {
        product = product * newNum[i];
        sum = sum + newNum[i];
    }
    return product - sum;
}


console.log(substractProductAndSum(538));


