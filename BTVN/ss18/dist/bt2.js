"use strict";
// Viết một hàm timing decorator có thể gọi là “timingDecorator” để tính toán và log ra được thời gian thực thi hàm decorator. Hàm decorator phải log ra được tên hàm, tham số, và thời gian thực thi tính bằng miliseconds và kết quả trả về. Sử dụng console.log() để logging
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function timingDecorator(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const start = Date.now();
            const result = yield originalMethod.apply(this, args);
            const end = Date.now();
            const executionTime = end - start;
            console.log(`Function ${propertyKey} executed in ${executionTime}ms`);
            console.log(`Arguments: ${JSON.stringify(args)}`);
            console.log(`Result: ${JSON.stringify(result)}`);
            return result;
        });
    };
    return descriptor;
}
class Example {
    someAsyncFunction(arg1, arg2) {
        return __awaiter(this, void 0, void 0, function* () {
            // Simulate some asynchronous work
            yield new Promise((resolve) => setTimeout(resolve, 1000));
            return `Result: ${arg1} ${arg2}`;
        });
    }
}
__decorate([
    timingDecorator
], Example.prototype, "someAsyncFunction", null);
const exampleInstance = new Example();
exampleInstance.someAsyncFunction(42, "hello");
