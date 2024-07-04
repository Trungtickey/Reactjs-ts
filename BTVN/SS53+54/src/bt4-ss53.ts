function displayNumbers1(callback: (num: number) => void, delay: number): void {
    let num = 1;
    
    const intervalId = setInterval(() => {
        callback(num);
        num += 1;
    }, delay);
}

// Ví dụ sử dụng:
const printNumber1 = (num: number) => {
    console.log(num);
};

displayNumbers1(printNumber1, 1000); // In ra sau khoảng tgian đã set
