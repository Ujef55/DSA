// Given an array of strings words, return the first palindromic string in the array.
// If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

const firstPalindrome = (words) => {
    for(let i = 0; i<words.length; i++) {
        let revWord = words[i].split('').reverse().join('');
        if(revWord == words[i]) {
            return words[i];
        }
    }
    return "";
}

console.log(firstPalindrome(["abc", "deed", "xyx", "hello", "madam"]));