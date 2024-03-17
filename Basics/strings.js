const name = "Suraj"

const repoCount = 2

// console.log(name + repoCount + " Repo");

// console.log(`My name is ${name} and my repo count is ${repoCount}`);

// Method to declare string in JavaScript

const myName = new String("Suraj Chaudhary")

// console.log(myName[4]);
// console.log(myName.__proto__);
// console.log(myName.length);
// console.log(myName.toUpperCase());
// console.log(myName.charAt(3));
// console.log(myName.indexOf('j'));

// Substring function
const gameName = 'Valorant';
const newString = gameName.substring(0,4)
// console.log(newString);

// Slice function
const anotherString = gameName.slice(0,4)
const anotherString2 = gameName.slice(-7,4)
// console.log(anotherString);
// console.log(anotherString2);

// Trim function
const stringOne = "     Suraj         "
// console.log(stringOne);
// console.log(stringOne.trim());

const url = "https://google.com/suraj%20chaudhary"
// console.log(url.replace('%20','-'));

// console.log(url.includes('suraj'));
// console.log(url.includes('surajj'));

const webUrl = 'suraj-ch-com'
console.log(webUrl.split('-'));