"use strict";
let arrss1 = ["vn", 100];
let arrss12 = ["us", 200];
let arrss13 = ["uk", 300];
const getShippingCost = (arr) => {
    if (arr[0] === "vn") {
        console.log(arr[0] + ": " + arr[1]);
    }
    else if (arr[0] === "us") {
        console.log(arr[0] + ": " + arr[1]);
    }
    else if (arr[0] === "uk") {
        console.log(arr[0] + ": " + arr[1]);
    }
    else {
        console.log("khong co");
    }
};
getShippingCost(arrss1);
getShippingCost(arrss12);
getShippingCost(arrss13);
