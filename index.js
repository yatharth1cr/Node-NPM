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

// Find the difference between the following 2 dates:
// 1.
let date1 = moment("2014-11-11");
let date2 = moment("2015-09-11");
console.log(date1.diff(date2, "days"));

// 2.
let date3 = moment("2014-11-27");
let date4 = moment("2015-09-16");
console.log(date3.diff(date4, "days"));

// Check is 2020-01-01 date after 2018-01-01
let after1 = moment("2020-01-01").isAfter("2018-01-01");
console.log(after1);
// Check is 2010-01-01 date after 2018-01-01
let after2 = moment("2010-01-01").isAfter("2018-01-01");
console.log(after2);
// Check if the year 2019 is a leap year
let leap1 = moment("2019").isLeapYear();
console.log(leap1);
// Check if the year 2020 is a leap year
let leap2 = moment("2020").isLeapYear();
console.log(leap2);
