// count occurrences of specific letter
const countIs = (string, letter) => {
    let newStr = string.toLowerCase();
    let newLetter = letter.toLowerCase();
    const arr = newStr.split('');
    const count = arr.filter((element) => {
        return element === newLetter;
    }).length
    
    return count;
}

console.log(countIs('count occurrences of specific letter', 'E'));