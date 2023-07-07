const largestWordIs = (string) => {
    const array = string.split(' ');
    let largetWord = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > largetWord.length) {
            largetWord = array[i];
        }
    }
    console.log(largetWord); ;
}
largestWordIs('largest word from string in javascript');