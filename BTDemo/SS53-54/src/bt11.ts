// Xây dựng một hàm có tên là fibonacci() có tham số truyền vào là một số nguyên dương n và trả về số Fibonacci thứ n.

// Sử dụng Async/Await để tính toán số Fibonacci bất đồng bộ và trả về kết quả.

// Sử dụng đệ quy để tính toán số Fibonacci.

// Thực hiện kiểm tra số n có hợp lệ không?

// Nếu <= 0 sẽ bắn ra lỗi sau: “Dữ liệu nhập vào không hợp lệ”

// f(1) = 1
// f(2) = 1
// f(n) = f(n-1)+f(n-2)
const fibonacci1 = async (n: number)=>{
    return await new Promise((resolve, reject)=>{
        if(n<=0){
            reject(new Error(`${n} không thỏa mãn yêu cầu phải > 0`))
        }else{
           resolve(fibo(n))
        }
    })
}

const fibo =(n: number): number=>{
    if(n<=2){
        return 1;
    }else{
        return fibo(n-1)+fibo(n-2); // đệ qui
    }
}
fibonacci1(-10).then((result)=>{
    console.log("Số fibonacci thứ 10 là : " + result);
}).catch((error) => console.log(error));