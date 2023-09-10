// return sum of all numbers in given array
const sumOfAllNumbers = (numbers) => {
    return numbers.reduce((acc, curr) => acc + curr);
}
console.log(sumOfAllNumbers([340, 243, 488, 983, 564, 231]));


// second approach


let sum = 0
const totalOfAllNumbers = (num) => {
    for (let i = 1; i <= num; i++) {
       sum += i
    }
    return sum;
}
console.log(totalOfAllNumbers(10));


// Third approach

const total = (n) => {
    return n*(n+1)/2
}

console.log(total(10));