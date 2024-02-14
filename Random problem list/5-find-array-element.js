// Write a function to check if an array contains a specific element.

const isContains = (animals, value) => {
    const element =  value.toLowerCase();
        for (let i = 0; i < animals.length; i++) {
            if (animals[i] === element) {
                return true;
            } else {
                return false;
            }
        }
}

console.log(isContains(['dog', 'elephant', 'tiger', 'lion'], 'Elephant'));