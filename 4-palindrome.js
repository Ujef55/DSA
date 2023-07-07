// check if a word is palindrome 

const isPalindrome = (word) => {
    const originalWord = word.toString().toLowerCase();
    const revWord = originalWord.toString().split('').reverse().join('');
    if (originalWord === revWord) {
        return `${word} is a palindrome`;
    } else {
        return `${word} is not a palindrome`;
    }
}
console.log(isPalindrome('Civic'));