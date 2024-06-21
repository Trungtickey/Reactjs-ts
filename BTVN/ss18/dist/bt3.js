"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function cachingDecorator(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    const cache = {};
    descriptor.value = function (...args) {
        const cacheKey = JSON.stringify(args);
        if (cache[cacheKey]) {
            console.log(`Using cached result for ${propertyKey}(${args.join(", ")})`);
            return cache[cacheKey];
        }
        const result = originalMethod.apply(this, args);
        cache[cacheKey] = result;
        console.log(`Calculated result for ${propertyKey}(${args.join(", ")}): ${result}`);
        return result;
    };
    return descriptor;
}
class Example1 {
    add(a, b) {
        console.log("Calculating sum...");
        return a + b;
    }
}
__decorate([
    cachingDecorator
], Example1.prototype, "add", null);
const exampleInstance1 = new Example1();
console.log(exampleInstance1.add(2, 3)); // Output: "Calculating sum..." and then 5
console.log(exampleInstance1.add(2, 3)); // Output: 5 (no "Calculating sum..." because the result is cached)
