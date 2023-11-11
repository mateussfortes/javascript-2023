'use strict';

const restaurant = {
    name: 'Classico italiano',
    location: 'Via angelo Tavanti 22, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian','Oganic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const menu = [
    ...restaurant.starterMenu, 
    ...restaurant.mainMenu
];

for (const item of menu) console.log(item);

