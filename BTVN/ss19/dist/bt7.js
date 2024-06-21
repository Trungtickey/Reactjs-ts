"use strict";
// Viết một class với decorator có thể áp dụng được nhiều hàm middlewares đến 1 hàm target. Hàm middlewares có thể truy cập đươc tham số của hàm original và định nghĩa được chúng hoặc có thể biểu diễn phương thức khác trước hoặc sau khi hàm originals được gọi
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
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
let Example2 = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _calculate_decorators;
    return _a = class Example2 {
            calculate(...values) {
                return values.reduce((sum, value) => sum + value, 0);
            }
            constructor() {
                __runInitializers(this, _instanceExtraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _calculate_decorators = [applyMiddlewares((original, ...args) => {
                    console.log(`Middleware 1: Original value is ${original}`);
                    return original + args.reduce((sum, arg) => sum + arg, 0);
                }, (original, ...args) => {
                    console.log(`Middleware 2: Original value is ${original}`);
                    return original * args.length;
                })];
            __esDecorate(_a, null, _calculate_decorators, { kind: "method", name: "calculate", static: false, private: false, access: { has: obj => "calculate" in obj, get: obj => obj.calculate }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
const exampleInstance2 = new Example2();
console.log(exampleInstance2.calculate(2, 3, 4));
