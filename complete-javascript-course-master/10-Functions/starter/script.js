'use strict';
/*

const bookings = [];

const createBooking = function (flightNumber, numPassengers = 1, price = 199 * numPassengers) {
   
    const booking = {
        flightNumber,
        numPassengers,
        price,
    }

    bookings.push(booking);
    console.log(booking);
};

createBooking('LH234', 2);
createBooking('LH235');





const lowerCaseWords = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperCaseWords = function (str) {
    const [first, ...other] = str.split(' ');
    return [first.toUpperCase(), ...other].join(' ');   
}
console.log(lowerCaseWords('Iam the best one among all!'));
console.log(upperCaseWords('Iam the best one among all!'));



const greet = ('greetings') => {

}


const poll = {
    question: 'What is your favourite coding language?',
    oprions: ['0:JavaScript', '1:Python', '2:Rust', '3:C++'],
    answers: new Array(4).fill(0),

    registerNewAnswer: function () {
        const userInput = Number(prompt('What is your favorite coding Language? \n 0.JavaScript \n 1.Python \n 2.Rust \n 3.C++ \n (Write Your option)'))

        //register the answer
        if (typeof userInput === 'number' && userInput<this.answers.length) {
            this.answers[userInput]++;

            this.displayResults();
            this.displayResults('string');
        } else {
            return console.log('You have enterd an invalid number, please reload the page and try again!');
        }
    },

    displayResults: function (type = 'array') {
        if (type === 'array') {
            console.log(this.answers)
        } else {
            console.log(`poll results are ${this.answers.join(', ')}`);
        }
    }
};

poll.registerNewAnswer();
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));


poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
   

//IIFE
const rk = function () {
    console.log("This function will never be called!");
}

rk();

(function () {
    console.log("DnD");
})();



//Closures
//Example 1

let f;

const g = function () {
    const a = 45;
    f = function () {
       return console.log(a * 2);
    }
};

g();
f();
console.dir(f);

const h = function () {
    const b = 145;
    f = function () {
        return console.log(b * 2);
    }
};

h();
f();
console.dir(f);


//Example 2
const boardPassenger = function (n, wait) {
    const perGroup = n / 3;

    setTimeOut(function () {
        console.log(`We are now boarding all ${n} passengers!`);
        console.log(`There are 3 groups, with each group having ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`We will start boarding in ${wait} seconds!`);
};

boardPassenger(120, 5);

*/

//Challange #2
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('h1').addEventListener('click', function () {
        header.style.color = 'blue';
    });
    
})();