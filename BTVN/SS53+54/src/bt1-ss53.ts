// Xây dựng một hàm đặt tên là calculate nhận vào ba tham số a , b có kiểu dữ liệu là số nguyên và một callback function.

// Hàm calculate sẽ tính tổng của hai số a và b

// Callback function sẽ in ra kết quả của phép tính trên

function calculate(a: number, b: number, callback: (result: number) => void): void {
     const sum = a + b;
     callback(sum);
}

const printResult = (result: number) => {
    console.log('Kết quả của phép tính là:', result);
};

calculate(1,2, printResult); //In kết quả ra