// find the average of numbers given in the array
const averageIs = (numbers) => {
    const sum = numbers.reduce((acc, curr) => acc + curr);
    const  average = sum / numbers.length;
    return average.toFixed(3)
}
console.log(averageIs([4,5,3,4,7,8,3,4,5,6,7]));