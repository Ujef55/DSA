const removeDups = (numbers) => {
    const set = new Set(numbers);
    return set;
}
console.log(removeDups([1,2,3,2,1,3,2,1,4,3,2,4,3,4,4,5,4,5,4,5,6,7,6,5,4,6,7,8,9,9,5,9]));