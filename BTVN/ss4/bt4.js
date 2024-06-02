let check= (arr,num) =>{
    let checknum = arr.includes(num)
    return checknum
}


console.log(check([1,2,3,4,5],3)); 
console.log(check([1,2,3,4,5],6));