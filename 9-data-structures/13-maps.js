const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze Italy');
// console.log(rest.set(2, 'Lisbon Portugal'));

rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

const time = 8;
//console.log(rest.get( time > rest.get('open') && time < rest.get('close') ));

//console.log(rest.has('categories'));
console.log(rest);
rest.delete(2);
console.log(rest);