// Viết một hàm processArray() nhận tham số truyền vào là một mảng các số nguyên
// và một callback function.

// Hàm processArray() sẽ duyệt qua mảng và gọi callback function với từng phần 
// tử của mảng được in ra sau một khoảng thời gian.

let i = 0; 
const processArray = (arrInt: number[], callback : Function) => {
    // đuyệt mảng
    if(i < arrInt.length){
        callback(arrInt[i]) // in ra giá trị 
        i++;
        setTimeout(()=>{
            processArray(arrInt,callback)
        },1000)
    }  
}

processArray([1, 2, 3, 4, 5], (number:number)=>console.log(number))

// const processArray =(arrInt : number[] , callback : Function) => {
//     arrInt.forEach((e, index)=>{
//         setTimeout(()=>{
//             console.log(e);
//             callback()
//         },index*1000)
//     })
// }
// processArray([1,2,3,4,5],()=>{})



//  fibonacci(n) : dãy fibonacci , 0,1,1,2,3,5,8,13,21,34,55,89,

// f(0) = 0;;
// f(1) = 1;
// f(n) = f(n-1)+f(n-2)
const fibonacci = (n: number): any => {
    if (n = 0) {
        return 0;
    }
    if (n = 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
