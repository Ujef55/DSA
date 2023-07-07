// return sum of all numbers in given array
const sumOfAllNumbers = (numbers) => {
    return numbers.reduce((acc, curr) => acc + curr);
}
console.log(sumOfAllNumbers([340, 243, 488, 983, 564, 231]));