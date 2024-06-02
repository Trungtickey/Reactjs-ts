"use strict";
let a = 10;
let b = 10;
let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Sum = (a, b) => {
    let c = a + b;
    return c;
};
const sumArr = (arr) => {
    return arr.reduce((temp, a) => temp + a, 0);
};
console.log(sumArr(Arr));
console.log(Sum(a, b));
