let arr=[1,2,3,4,5,6]

let sum = (arr) =>{
    let sum=0;
    for ( let key of arr){
        if(key % 2== 0){
            sum += key 
        }
    }
    return sum;
}

console.log(sum(arr)); 