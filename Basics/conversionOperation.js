let marks1 = 65;
let marks2 = null;
let marks3 = undefined;
let marks4 = "";
let marks5 = "Suraj";

// Converion in Number

let marks1InNumber = Number(marks1);
let marks2InNumber = Number(marks2); // null => 0
let marks3InNumber = Number(marks3); // undefined => NaN
let marks4InNumber = Number(marks4); // "suraj" => NaN   and "" =>0
let marks5InNumber = Number(marks5); // "suraj" => NaN   and "" =>0

// Printing in table form
// console.table([
//   marks1InNumber,
//   marks2InNumber,
//   marks3InNumber,
//   marks4InNumber,
//   marks5InNumber,
// ]);

let isEligible = 1;
let name = "";
let age = 20;

//Conversion in Boolean
let isEligibleInBoolean = Boolean(isEligible); //Return true
let nameInBoolean = Boolean(name); // "Suraj" => true And "" => false
let ageInBoolean = Boolean(age); // undefined => false  null => false and any Number => true

//Printing In Table form
// console.table([
//     isEligibleInBoolean,
//     nameInBoolean,
//     ageInBoolean,
// ]);

//Conversion in String

let score = 33;
let isPresent = true;
let temp;
let scoreInString = String(score);
let isPresentInString = String(isPresent);
let tempInString = String(temp); // undefined => 'undefined'

// Printing in table form
// console.table([scoreInString, isPresentInString, tempInString]);


//**************************************** Operations  **************************************//

let value = 45;
let negativeValue = -value

// console.log(negativeValue);


let str1 = "Hello"
let str2 = " Suraj Chaudhary"
let str3 = str1 + str2;

// console.log(str3);

//Mathematical Operations 

// console.log(2 + 3);
// console.log(2 - 3);
// console.log(2 * 3);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

// console.log("1" + 2);  // 12
// console.log(1 + "2");  // 12
// console.log("1" + "2");  // 12
// console.log("1" + 2 + 2);  //122
// console.log(1 + 2 + "2");  // 32

// console.log(true); //true
// console.log(+true);// 1
// console.log(false);//false
// console.log(+false);//0

// console.log(+"");//0

