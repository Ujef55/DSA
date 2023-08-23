Array.prototype.extraProperty = 'Js-learning';

const myArr = [1,2,3,4,5];

for (let value in myArr) {
    if(myArr.hasOwnProperty(value)) {
        console.log(value);
    }
}

// By using prototype we can insert new properties in an array, but those will not be considered as original properties. 
// So, to get original properties just add a check to array elements using hasOwnProperty syntax.