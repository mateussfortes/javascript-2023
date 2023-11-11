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

console.log(restaurant.openingHours);