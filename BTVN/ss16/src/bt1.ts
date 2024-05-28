// Định nghĩa hàm generic 
function identity<T>(arg:T): T{
    return arg;
}

// Kiểm tra hàm với nhiều loại dữ liệu khác nhau

// Số
let num = identity<number>(123);
console.log(num);  // Output: 123

// Chuỗi
let str = identity<string>("Hello, TypeScript!");
console.log(str);  // Output: Hello, TypeScript!

// Mảng
let array = identity<number[]>([1, 2, 3, 4, 5]);
console.log(array);  // Output: [1, 2, 3, 4, 5]

// Đối tượng
let obj = identity<{name: string, age: number}>({name: "Alice", age: 30});
console.log(obj);  // Output: { name: 'Alice', age: 30 }

// Boolean
let bool = identity<boolean>(true);
console.log(bool);  // Output: true