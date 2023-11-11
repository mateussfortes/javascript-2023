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

const restaurant = {
    name: 'Classico italiano',
    location: 'Via angelo Tavanti 22, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian','Oganic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    openingHours,
};

// OBJECT KEYS, VALUES AND ENTRIES

// PROPERTY NAMES
const properties = Object.keys(openingHours);
// console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
    openStr += `${day}, `;
}

// console.log(openStr);

// PROPERTY VALUES
const values = Object.values(openingHours);
// console.log(values);

const entries = Object.entries(openingHours);
// console.log(entries);

for(const [key, {open, close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}