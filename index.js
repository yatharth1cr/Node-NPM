let moment = require("moment");

// 1. Print Date or Time in the following format:
let a = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(a); //April 6th 2024, 1:43:29 pm

let b = moment().format("dddd");
console.log(b); //Saturday

let c = moment().format("MMM Do YY");
console.log(c); //Apr 6th 24

// 2. Check if the following date is valid or not:
let d = moment("2020-01-01", "YYYY-MM-DD").isValid();
console.log(d); //true

let e = moment("2020-14-01", "YYYY-MM-DD").isValid();
console.log(e); //false

// 3. Manipulating Dates

// adds 7 days to current date
let f = moment().add(7, "days").format("DD");
console.log(f); //13

// adds 7 months to current date
let g = moment().add(7, "months").format("MM");
console.log(g); //11

// adds 7 years to current date
let h = moment().add(7, "years").format("YYYY");
console.log(h); //2031

// subtracts 7 days to current date
let i = moment().subtract(7, "days").format("DD");
console.log(i); //30

// subtracts 7 months to current date
let j = moment().subtract(7, "months").format("DD");
console.log(j); //06

// subtracts 7 years to current date
let k = moment().subtract(7, "years").format("DD");
console.log(k); //06
