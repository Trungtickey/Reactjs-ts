"use strict";
// Viết một class với decorator có thể áp dụng được nhiều hàm middlewares đến 1 hàm target. Hàm middlewares có thể truy cập đươc tham số của hàm original và định nghĩa được chúng hoặc có thể biểu diễn phương thức khác trước hoặc sau khi hàm originals được gọi
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator to apply multiple middlewares to a target method
function applyMiddlewares(...middlewares) {
    return (target, propertyKey, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let result = originalMethod.apply(this, args);
            for (const middleware of middlewares) {
                result = middleware(result, ...args);
            }
            return result;
        };
        return descriptor;
    };
}
class Example2 {
    calculate(...values) {
        return values.reduce((sum, value) => sum + value, 0);
    }
}
__decorate([
    applyMiddlewares((original, ...args) => {
        console.log(`Middleware 1: Original value is ${original}`);
        return original + args.reduce((sum, arg) => sum + arg, 0);
    }, (original, ...args) => {
        console.log(`Middleware 2: Original value is ${original}`);
        return original * args.length;
    })
], Example2.prototype, "calculate", null);
const exampleInstance2 = new Example2();
console.log(exampleInstance2.calculate(2, 3, 4));
