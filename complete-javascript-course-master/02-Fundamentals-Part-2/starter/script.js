'use strict'
/* 
//Function declarations
function juice(fruit1,fruit2) {
    const mix=`This is juice mixture of ${fruit1} apple and ${fruit2} oranges`;
    return mix;
}

const fruit = juice(1,2);
console.log(fruit);


function calcAge(birthyear) {
    return 2022 - birthyear;
}
console.log(calcAge(1997));

//Function Expressions
const calcAge2 = function (birthyear1) {
    return 2022 - birthyear1;
}
console.log(calcAge2(1997));

//Arrow Functions
const bday=birthyear5=>2023-birthyear5;
console.log(bday(1996));

const retire = (birthyear2) => {
    let age = 2022 - birthyear2;
    let retirement = 65 - age;
    return `You will be retired in ${retirement} years`;
}

console.log(retire(1997));


function cutPieces(fruit) {
    return fruit * 4;
}


function juice(fruit1, fruit2) {
    const cutPieces1= cutPieces(fruit1);
    const cutPieces2 = cutPieces(fruit2);
    const mix = `This is juice mixture of ${cutPieces1} apple pieces and ${fruit2} oranges pieces`;
    return mix;
}

const fruit = juice(1, 2);
console.log(fruit);




const calcAvgScore = (score1, score2, score3) => { return (score1 + score2 + score3) / 3; };

const checkWinner=(avg1, avg2) => {
    if (avg1 >= 2 * avg2) { console.log(`Dolphines win by (${avg1} vs ${avg2})`); }
    else if (avg2 >= 2 * avg1) { console.log(`Koalas Win by (${avg1} vs ${avg2})`); }
    else {console.log(`Matchs drawn with dolphines score ${avg1} and Koalas score ${avg2}`);}
}
    //test data 1
   // const avgDolphineScore = calcAvgScore(44, 23, 71);
    //const avgKoalaScore = calcAvgScore(65, 54, 49);

    //test data 2
    const avgDolphineScore = calcAvgScore(85,54,41);
    const avgKoalaScore = calcAvgScore(23,34,27);

    checkWinner(avgDolphineScore, avgKoalaScore);


const cars = ['tesla', 'Toyota', 'Ford'];
console.log(cars);
console.log(cars[cars.length - 1]);
cars[2] = 'GMC';
console.log(cars);

const make = [2008, 2011, 2020];
const carmake = [cars[0] +'-'+ make[0], cars[1] +'-'+ make[1], cars[2]+'-' + make[2]];
console.log(carmake);

cars.push('Shubaru');//add element to the end of array
cars.unshift('dodge');//add element to the beginning of the array
console.log(cars);
cars.pop();//remove last element
console.log(cars);
cars.shift();//remove firsr element
console.log(cars);

console.log(cars.indexOf('GMC'));//get the index of an element in the array

console.log(cars.includes('GMC'));//check if an element is present or not



const Bill = [125, 555, 44];
console.log(Bill);

const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const tips = [calcTip(Bill[0]), calcTip(Bill[1]), calcTip(Bill[2])];
console.log(tips);


//Objects
const jonas = {
    firstName:'Jonas',
    lastName:'Daniel',
    job:'Teacher',
    location:'Boston',
    birthYear:1997,
    friends:['vamsy', 'Nikhil', 'Kiddo'],
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    driversLicense:true
};

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]} and his age is ${jonas.calcAge(jonas.birthYear)}`);
console.log(jonas.calcAge(jonas.birthYear));
console.log(jonas['calcAge'](this.birthYear));

console.log(jonas.calcAge(jonas.age));
console.log(jonas.calcAge(jonas.calcAge()));

console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and ${jonas.driversLicense? "has a driversLicense": "has no DL"}`);


//CHALLENGE #3
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    fullName: function () { return this.firstName + ' ' + this.lastName },
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.markBMI = this.mass / (this.height ** 2);
        return this.markBMI;
    }
};


const smith = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.smithBMI = this.mass / (this.height ** 2);
        return this.smithBMI;
    }
};

smith.fullName = mark.fullName;
mark.calcBMI();
smith.calcBMI();

if (mark.calcBMI(mark.markBMI) > smith.calcBMI(smith.smithBMI)) {
    console.log(`${mark.fullName()}'s BMI (${mark.markBMI}) is higher than ${smith.fullName()}'s BMI (${smith.smithBMI})`);
} else {
    console.log(`${smith.fullName()}'s BMI (${smith.smithBMI}) is higher than ${mark.fullName()}'s BMI (${mark.markBMI})`);
};



//Loops
for (let i = 1; i < 10; i++) {
    console.log(`${i}`);
}


const kat = [];
const types = [];
for (i = 0; i < 10; i++) {
    kat.push(i);
    types[i] = typeof kat[i];
    types.push(typeof kat[i]);
}

console.log(kat);
console.log(types);


const years = [1997, 1999, 1996, 1992, 1991];
const ages = [];
for (let i = 0; i <= years.length; i++) {
    ages[i] = 2022 - years[i];

    ages.push(ages[i]);
}
console.log(years);
console.log(ages);



//challeneg #4
const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    bill >= 50 && bill <= 200 ?  tip=bill * 0.15 : tip=bill * 0.20;
    return tip;
}

for (i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + (calcTip(bills[i])));
}
console.log(bills);
console.log(tips);
console.log(totals);
console.log(totals.length)
    ;
const average = function (tot) {
    let sum = 0;
    for (let k = 0; k < tot.length; k++) {
        sum = sum + tot[k];
    }
    return sum / tot.length;
}
console.log(average(totals));
*/



function eventExecution(){
    let i=0
    while(i<=10000){
        let p=i
        setTimeout(()=>console.log("timeout - "+p),p)
        i+=500
    }
}
eventExecution()

