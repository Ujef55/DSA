// // Write a function to generate a random password of a given length.
let characterSet = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnioqrtuvwxyz0123456789!@#$%^&*()_+-=[]\;',.{}:"<>?`;
let randomPass = '';



const passwordIs = (length) => {
    for (let i = 0; i < length; i++) {
       const randomLetter = Math.floor(Math.random() * characterSet.length);
       randomPass += characterSet.charAt(randomLetter);
    }
    return randomPass;
}
console.log(passwordIs(7));

