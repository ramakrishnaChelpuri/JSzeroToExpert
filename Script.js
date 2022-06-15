//let js = 'amazing';
//if (js == 'amazing') alert('JavaScript is Fun!');

math = 40 + 6 + 56;
console.log(math);
let PI = 3.1456;
console.log(PI);

//coments

let country = 'India';
let continent = 'Asia';
let population = 10134433;
console.log(country);
console.log(continent);
console.log(population);
console.log(typeof country);
console.log(typeof population);

const year = 1997;
//year = 1987;
console.log(year);

var name = 'Ramakrishna';
console.log(name);
name = 'anjala';
console.log(name, year / 2);

let value = 30 - 14;
value -= 10;
console.log(value);


const now = 2022;
ageAnju = now - 1997;
ageRam = now - 1996;
console.log(ageAnju,ageRam);
console.log(ageAnju < ageRam);


const massOfMark = 78;
const heightOfMark = 1.69;

const massOfJohn = 92;
const heightOfJohn = 1.95;

const marksBMI = massOfMark / heightOfMark ** 2;
const johnsBMI = massOfJohn / heightOfJohn ** 2;
console.log(marksBMI,johnsBMI);

const markHeigherBMI = marksBMI > johnsBMI;
if (markHeigherBMI == true)
    console.log("Mark's BMI is heigher than John's");
else
    console.log("John's BMI is heigher than Mark's");


const firstName = 'Ramakrishna';
const age = 26;
const org = 'HighRadius';

const ram = `I'am ${firstName} working for ${org} at the age of ${age}😍`;
console.log(ram);


const user = prompt("Enter your name?");
console.log(user);


const avgDolphinsScore = (96 + 109 + 89) / 3;
const avgKoalasScore = (88 + 91 + 110) / 3;
const minScore = 100;
console.log(avgDolphinsScore, avgKoalasScore);

let scoreReqDolphine;
let scoreReqKoala;
if (avgDolphinsScore >= 100) {
     scoreReqDolphine = 'Eligible';
} if (avgKoalasScore > 100) {
     scoreReqKoala = 'Eligible';
} else {
     scoreReqDolphine = 'Not Eligible';
     scoreReqKoala = 'Not Eligible';
}
console.log(scoreReqDolphine, scoreReqKoala);

if ((avgDolphinsScore >= minScore) && (avgDolphinsScore > avgKoalasScore)) {
    console.log("Dolphins team wins!");
} if ((avgDolphinsScore >= minScore) && (avgKoalasScore>=minScore) && (avgDolphinsScore == avgKoalasScore)) {
    console.log("Temas score level! Result draw");
} if ((avgKoalasScore > minScore) && (avgKoalasScore > avgDolphinsScore)) {
    console.log("Koalas team wins!");
} else {
    console.log('Both the teams did not reach minimun score! Better luck next time...');
}

const way=prompt("Please choose your route!")
const route = way;

switch (route){
    case 'Highway':
        console.log("Trucks and trailers allowed, please do not enter shoulder lane!");
        break;
    case 'Parkway':
        console.log("Trucks and trailers not prohibited, Fuel stops ahead!");
        break;
    default:
        console.log("In valid route, please check! ");
}


const number = 56;
//number > 100 ? console.log("number is higher than limit!") : console.log("number is within the limit!");
const store = number > 100 ? 'off limits' : 'within limits';
console.log(store);

const age1 = prompt('Are you 18? Please enter your age');
console.log(`${age1 > 18 ? 'you are welcome' : 'Age limit please close the window'}`);

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
console.log(`The total bill including tip is ${bill + tip}`);