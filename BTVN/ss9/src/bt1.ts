let arrss1: [string, number] = ["vn", 100];
let arrss12: [string, number] = ["us", 200];
let arrss13: [string, number] = ["uk", 300];

const getShippingCost = (arr: [string, number]): any => {
  if (arr[0] === "vn") {
    console.log(arr[0] + ": " + arr[1]);
  } else if (arr[0] === "us") {
    console.log(arr[0] + ": " + arr[1]);
  } else if (arr[0] === "uk") {
    console.log(arr[0] + ": " + arr[1]);
  } else {
    console.log("khong co");
  }
};

getShippingCost(arrss1);
getShippingCost(arrss12);
getShippingCost(arrss13);