const rest1 = {
    name: 'Capri',
    numGuests: 20,
};

const rest2 = {
    name: 'La piazza',
    owner: 'Giovani Rossi',
};

//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests &&= 10;
rest2.numGuests &&= 10;


console.log(rest1);
console.log(rest2);