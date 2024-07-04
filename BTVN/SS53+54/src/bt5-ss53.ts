function checkCondition(condition: boolean, callback: (result: boolean) => void): void {
    setInterval(() => {
        callback(condition);
    }, 1000);
}

// Ví dụ sử dụng:
const display = (result: boolean) => {
    console.log('Điều kiện trả về:', result);
};

checkCondition(true, display);  // In ra "Điều kiện trả về: true" sau mỗi 1 giây
checkCondition(false, display); // In ra "Điều kiện trả về: false" sau mỗi 1 giây
