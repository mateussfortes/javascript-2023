'use strict';

const restaurant = {
    name: 'Classico italiano',
    location: 'Via angelo Tavanti 22, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian','Oganic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 12,
            close: 22,
        },
        sat: {
            open: 12,
            close: 22,
        },
    }
};

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c:14 };
({a,b} = obj);
console.log(a,b);

//nested objects
const {
    fri: {
        open: o,
        close: c
    },
} = openingHours;
console.log(o, c);