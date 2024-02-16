// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, 
// it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

const isPalindrome = (s) => {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    s = s.trim();

    let start = 0;
    let end = s.length - 1;

    while (start<end) {
        if(s[start]!==s[end]) {
            return false;
        }
        start++, end--;
    }
    return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))