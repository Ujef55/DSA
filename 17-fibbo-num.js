let n = 10
let num1 = 0;
let num2 = 1;

console.log(num1);
console.log(num2);
for (let i = 1; i <= n; i++) {
    let fibbNum = num1 + num2;

    num1 = num2;
    num2 = fibbNum;

    console.log(fibbNum);

}