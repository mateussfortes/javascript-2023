'use strict';

const secureBooking = function () {
    let passengerCont = 0;

    return function() {
        passengerCont++;
        console.log(`${passengerCont} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);