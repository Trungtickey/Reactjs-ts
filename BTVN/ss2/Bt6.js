function sum(arr){
    return arr.reduce((temp, a) => temp + a, 0);
}
console.log(sum([100,200,3000,400000,5000000]));