// Viết một hàm delayedCallback() nhận tham số truyền vào là một callback function và một số nguyên thể hiện thời gian delay (miligiây).

// Hàm delayedCallback() sẽ gọi callback function sau một khoảng thời gian nhất định.

const delayedCallback = (callbackFn: Function, int : number)=>{
    // int là thời gian delay (milis)
    setTimeout(()=>{
        callbackFn(); // Gọi hàm callback sau khoảng thời gian milis
    }, int);
}

const printNumber = ()=>{
    let num = Math.random()*1000
    console.log(num);
}
delayedCallback(printNumber,3000);