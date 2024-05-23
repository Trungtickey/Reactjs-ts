function printArguments(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

// Ví dụ sử dụng:
printArguments(1, 2, 3, 'a', 'b', 'c'); // Sẽ in ra từng đối số một trên mỗi dòng
printArguments('Hello', 'world', 42);   // Sẽ in ra từng đối số một trên mỗi dòng
printArguments();                       // Không có đối số nào, không in gì cả
