function hasPrimeNumber(arr){
    const isPrime = (num) => {
        for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
            if (num % i === 0) return false;
        return num > 1;
    };
    return arr.some(isPrime);
}
console.log(hasPrimeNumber([4,6,8,9,10]));
console.log(hasPrimeNumber([4,5,6,7,8,9]));