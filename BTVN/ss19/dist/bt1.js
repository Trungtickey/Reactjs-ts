"use strict";
function logDecorator(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling function '${propertyKey}' with arguments ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`Function '${propertyKey}' returned ${result}`);
        return result;
    };
    return descriptor;
}
// Sử dụng decorator
class Example {
    add(a, b) {
        return a + b;
    }
    greet(name, greeting = "Hello") {
        return `${greeting}, ${name}!`;
    }
}
// Gọi các hàm để kiểm tra decorator
const example = new Example();
const resultAdd = example.add(2, 3);
const resultGreet = example.greet("Tickey", "Lô ní");
