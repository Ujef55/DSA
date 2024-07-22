var sortPeople = function (names, heights) {
    let people = [];
    for (let i = 0; i < names.length; i++) {
        people.push({ name: names[i], height: heights[i] });
    }

    people.sort((a, b) => b.height - a.height);
    console.log(people);

    let sortedName = people.map((index) => index.name)

    return sortedName;
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));