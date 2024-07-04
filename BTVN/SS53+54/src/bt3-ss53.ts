function displayNumbers(callback: (num: number) => void, delay: number): void {
    let num = 1;
    
    const intervalId = setInterval(() => {
        callback(num);
        num += 1;
    }, delay);
}

// Ví dụ sử dụng:
const printNumber = (num: number) => {
    console.log(num);
};

displayNumbers(printNumber, 1000); // In ra lần lượt các số nguyên sau mỗi 1 giây
