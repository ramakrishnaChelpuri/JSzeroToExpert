'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



//To display all the transactions on UI
const displayMovements = function (movements) {
    containerMovements.innerHTML = '';
    movements.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `
        <div class="movements">
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}</div>
        </div>`;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};
displayMovements(account1.movements);


//To display the total balance on UI
const displayBalance = function (movements) {
    const bal = movements.reduce((acc, cur) => acc + cur, 0);
    labelBalance.textContent = `$${bal}`;
};
displayBalance(account1.movements);


//To display account summary(deposits, withdrawals and interest rate)
const displaySummary = function (mov) {
    const calcDeposits = mov
        .filter(cur => cur >= 0)
        .reduce((acc, cur) => acc + cur, 0);
    labelSumIn.textContent = `$${calcDeposits}`;

    const calcWithdrawals = mov
        .filter(cur => cur < 0)
        .reduce((acc, cur) => acc + cur, 0);
    labelSumOut.textContent = `$${Math.abs(calcWithdrawals)}`;

    const calcInterestRate = mov
        .map(cur => (cur * 1.2)/100)
        .filter(cur=>cur>=0)
        .reduce((acc, cur) => acc + cur, 0);
    labelSumInterest.textContent = `$${calcInterestRate}`;

};
displaySummary(account1.movements);

////////////////////////////////


console.log('-------Examples-----------');
const movements3 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const max = movements3.reduce((acc, mov) => acc > mov ? acc : mov,movements3[0]);
console.log(max);


//const userName = account1.owner.toLowerCase().split(' ').map((str, i) => str[0]).join('');
const listOfUserNames = function (act) {
    act.forEach(function (act) {
        act.username = act.owner.toLowerCase().split(' ').map((str, i) => str[0]).join('');
    });
};

listOfUserNames(accounts);
console.log(accounts);


const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements2.filter(function(mov){
    return mov> 0;
});

const withdrawals = movements2.filter(mov=> mov < 0);
console.log(deposits, withdrawals);


    
    //reduce() method to calculate the total balance
    //this method uses callback function with 4 parameters, the 1st one is accumilator and 
    //the other three are same as forEach function
    //reduce() method itself has two parameters in it, one is callback function and the initial value of accumilator
    

const balance = movements2.reduce(function (acc, cur, i, arr) { 
    console.log(`Iteration ${i} your balance is ${acc}`);
    return acc + cur;
},0);   //0 is the initial value of accumilator
console.log(balance);

//getting balance using arrow function
const bal = movements2.reduce((acc, cur) => acc + cur, 0);
console.log(bal);




    /////////////////////////////////////////////////

console.log('-------- LECTURES --------');


    //const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    /////////////////////////////////////////////////

    const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
    
    //slice method creates new array with element starting from index parameter
    console.log(arr.slice(3));
    console.log(arr.slice(1, 4));
    console.log(arr.slice(-1));
    
    //splice method changes original array
    console.log(arr.splice(3));
    console.log([...arr]);
    
    console.log(arr.splice(1, 3));
    
    
    //Reverse
    const arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
    const arr2 = ['k', 'j', 'i', 'h', 'g'];
    
    //Concat
    console.log(arr1.concat(arr2.reverse()));
    console.log(...arr1, ...arr2);//spread operator
    
    
    
    //At() method
    const array = ['1', '2', '3', '4', '5', '6'];
    console.log(array[0]);
    console.log(array.at(0));
    console.log(array.at(-1));
    
    
    //ForEach() method
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
    
    for (const movement of movements) {
        if (movement > 0) {
            console.log(`You have deposited ${movement}$`);
        } else {
            console.log(`You have withdrew ${Math.abs(movement)}$`);
        }
    };
    
    console.log('--------ForEach()---------');
    
    movements.forEach(function (mov, i, arr) {
        if (mov > 0) {
            console.log(`movement ${i + 1}: You have deposited $${mov}`);
        } else {
            console.log(`movement ${i + 1}: You have withdrew $${Math.abs(mov)}`);
        }
    });
    

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
    
    currencies.forEach(function (value, key, map) {
        console.log(`${key}: ${value}`)
    });
    
    const currenciesUnique = new Set(['USA', 'EUR', 'IND', 'USA', 'IND']);
    console.log(currenciesUnique);
    currenciesUnique.forEach(function (value, _, map) { //_ is denoted as throwaway variable in javaScript
        console.log(`${value}: ${value}`)
    });
        
    
    //map() method
    const currency = [200, 450, -400, 3000, -650, -130, 70, 1300];
    const USDtoINR = 78.37;
    //arrow function
    const movementsINR = currency.map(mov => mov * USDtoINR);
    
    //normal function
    const movementsINR1 = currency.map(function (mov) {
        return mov * USDtoINR;
    })
    console.log(movementsINR);
    console.log(movementsINR);
    console.log(currency);
    
    //traditional way of doing the above functionality
    const movementsINRfor = [];
    for (const cur of currency) { movementsINRfor.push(cur * USDtoINR) };
    console.log(movementsINRfor);
    
    
    //forEach() method inside map() method using arrow function
    const movementsDescription = currency.map((mov, i) =>
    `$${Math.abs(mov)} has been ${mov > 0 ? 'deposited' : 'withdrew'}`);

    /*{ if (mov > 0) {return `$${mov} has been deposited`;
         } else {return `$${Math.abs(mov)} has been withdrawn`;}    }
    */


//find() method
const firstDeposit = account1.movements.find(mov => mov > 0);
console.log(firstDeposit);





/////////////////////////////////////////////////////
console.log('---------CODING CHALLENEGES---------');
//Challenge #1
/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const Julia = [3, 5, 2, 12, 7];
const Kate = [4, 1, 15, 8, 3];

const juliaDogs = Julia.slice(1, 4);
console.log(juliaDogs);

const checkDogs = function (dogs) {
    dogs.forEach(function (age, i) {
        const type = age > 3 ? `Dog number${i + 1} is an adult, and is ${age} years old` : `Dog number${i + 1} is still a puppy🐶`;
        console.log(type);
    });
};

checkDogs(juliaDogs);
checkDogs(Kate);


//Challenge #2
/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const calcAvgHumanAges = function (dogs) {
    const calcHumanAges = dogs.map(age => age <= 2 ? (2 * age) : (16 + age * 4));
    const checkAge = calcHumanAges.filter(ages => ages >= 18);
    const avg = checkAge.reduce((acc, age) =>acc + age,0)/checkAge.length;
    console.log(avg);
};

calcAvgHumanAges([5, 2, 4, 1, 15, 8, 3]);
calcAvgHumanAges([16, 6, 10, 5, 6, 1]);


//Coding Challenge#3
/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
//Alternate way using all three methods in one go
const calcAvgHumanAges2 = (dogs)=> {
    const avg = dogs
        .map(age => age <= 2 ? (2 * age) : (16 + age * 4))
        .filter(age => age >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length, 0) ;
    console.log(avg);
};

calcAvgHumanAges2([5, 2, 4, 1, 15, 8, 3]);
calcAvgHumanAges2([16, 6, 10, 5, 6, 1]);

//flat
const sampleArray = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(sampleArray.flat());

//map, flat, reduce chaining
const overAllBal = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
console.log(overAllBal);

//flatMap
const overAllBal2 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log(overAllBal2);

