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

//padrao
const arr = [2,3,4];
const [x, y, z] = arr;
// console.log(x,y,z);

let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//trocando variaveis

[main, secondary] = [secondary, main];

// console.log(main, secondary);

// usando funções
const [starter, mainCourse] = restaurant.order(2,0);
// console.log(starter, mainCourse);

// nested
const nested = [2,4,[5,6]];
// const [i, ,j] = nested;
// console.log(i,j);

const [i, , [j,k]] = nested;
//console.log(i, j, k);

//default values
const [p, q, r = 1] = [8, 9];
console.log(p, q, r);
