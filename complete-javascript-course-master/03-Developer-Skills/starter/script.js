// Remember, we're gonna use strict mode in all scripts now!
'use strict';


console.log('hello world');

const temps = [2, 3, 7, 90, 'error', 'iuhsd78', 43, 56];

const tempAltitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i <= temps.length; i++) {
        if (typeof temps[i] !== 'number') continue;
        if (temps[i] > max) max = temps[i];
        if (temps[i] < min) min = temps[i];
    }
    console.log(max, min);
    return max - min;
}
    

console.log(tempAltitude(temps));

const temp1 = [45, 67, 89, 32, 1, 89];

const temparatures = temps.concat(temp1);
console.log(temparatures);
console.log(tempAltitude(temparatures));


const x = 78;

const GL = function (cos) {
    x > 50 && x < 75 ? console.log('greater') : console.log('lower');
}
GL(x);



