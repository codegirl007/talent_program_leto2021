const myClasses = {
    firstHour: "Ethics",
    secondHour: "Programming",
    thirdHour: "Biology"
};

function createSentence({ secondHour }) {
    return 'Time to go ' + secondHour;
};

console.log(createSentence(myClasses));

const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne',
    address: {
        city: 'Gotham'
    }
};

({ address: { city } } = hero);

console.log(city);