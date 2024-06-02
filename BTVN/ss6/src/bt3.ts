let a: number = 10;
let b: number = 10;
let Arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Sum = (a: number, b: number) => {
  let c: number = a + b;
  return c;
};

const sumArr = (arr: number[]) => {
  return arr.reduce((temp: number, a: number) => temp + a, 0);
};

console.log(sumArr(Arr));

console.log(Sum(a, b));