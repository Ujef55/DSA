const checkNum = (number) => {
   if (number % 2 === 0) {
    return `${number} : even`;
   } else {
    return `${number} : odd`;
   }
}

console.log(checkNum(9));