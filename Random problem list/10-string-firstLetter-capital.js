const makeFirstLetterCapital = (string) => {
    const array = string.split(' ');
    let newStr = array.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    newStr = newStr.join(' ');
    return newStr;

}
console.log(makeFirstLetterCapital('make every first letter capital'));