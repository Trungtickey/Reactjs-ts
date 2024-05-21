function allPositiveNumber(arr){
    let check = arr.every((num) => num > 0);
    return check;
}
console.log(allPositiveNumber([2,-4,6,-8,10]));
console.log(allPositiveNumber([3,5,7,9,11]));