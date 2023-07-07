const calculate = (numbers) => {
    const sumOfPositiveNums = numbers.filter((num) => num > 0)
    .reduce((acc, curr) => acc + curr );
    return sumOfPositiveNums;
}
console.log(calculate([34,-56,-23,-35,45,65,-67,45]));