// find index of specific element from an array

let animals = ['Elephant', 'Dog', 'Zebra', 'Tiger', 'lion'];

const findIndex = (animal) => {
    animal = animal.toLowerCase();
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].toLowerCase() === animal) {

            return i;
        }
    }
}
console.log(findIndex('Dog'));



