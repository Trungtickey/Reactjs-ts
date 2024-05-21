function allNumbersDivisibleBy(arr, number){
    let check = arr.every((num) => num % number == 0);
    return check;
}

console.log(allNumbersDivisibleBy([2,4,6,8,10], 2));
console.log(allNumbersDivisibleBy([2,3,4,6,8], 2));