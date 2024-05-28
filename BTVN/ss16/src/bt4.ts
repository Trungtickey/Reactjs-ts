// Khai báo một biến kiểu boolean và gán giá trị. sử dụng biến đó làm điều kiện trong câu lệnh điều kiện, nếu đúng thì in ra xin chào, nếu sai thì in ra tạm biệt.

let checkBoolean: boolean = true;

// Định nghĩa hàm generic
function conditionalPrint<T>(condition: T): void {
    if (condition) {
        console.log("Xin chào");
    } else {
        console.log("Tạm biệt");
    }
}

// Sử dụng hàm với biến boolean
conditionalPrint(checkBoolean);

// Thay đổi giá trị biến và kiểm tra lại
checkBoolean = false;
conditionalPrint(checkBoolean);