// #00
// Name generator

let firstNameArray = ['Lech', 'Leon', 'Leszek', 'Lucjan', 'Ludwik'];
let secondNameArray = ['Furmański-Jaworski', 'Armusiewicz', 'Bąkowski', 'Jackowiak', 'Arciemiuk'];
let space = ' ';

let firstName = firstNameArray[Math.floor(Math.random()*firstNameArray.length)];
let secondName = secondNameArray[Math.floor(Math.random()*secondNameArray.length)];

let name = firstName + space + secondName;

console.log(name);
