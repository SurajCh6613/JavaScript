//  Dates
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toString());

// let myCreatedDate = new Date(2023, 2, 24)
// let myCreatedDate = new Date(2023, 2, 24, 5, 4)
// let myCreatedDate = new Date("2023-03-24")
let myCreatedDate = new Date("03-24-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getFullYear());

// For customization of dates and time
let a = newDate.toLocaleString('default', {
    weekday:"long"
})
console.log(a);