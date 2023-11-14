'use strict';

const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 12,
        close: 23,
    },
    sat: {
        open: 0,
        close: 24,
    },
}

const question = new Map([
    ['question', 'What is the best programing language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct!'],
    [false, 'Try again!'],
]);

// console.log(question);

//CONVERT OBJECT TO MAP
// console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

// console.log(question.get('question'));

for(const [key, value] of question) {
//    if ( typeof key === 'number' ) console.log(`Answer ${key}: ${value}`);
}

const answer = 3;

console.log( question.get(question.get('correct') === answer));