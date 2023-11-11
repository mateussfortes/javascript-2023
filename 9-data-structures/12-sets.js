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

const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
]);

console.log(ordersSet);

// console.log(ordersSet.has('Pizza'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');

// ordersSet.delete('Risotto');

// console.log(ordersSet);

// for(const order of ordersSet) console.log(order);

// EXAMPLE

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);