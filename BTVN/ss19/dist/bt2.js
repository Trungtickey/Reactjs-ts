"use strict";
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
function validateDecorator(rules) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            // Xác thực các đối số dựa trên các bộ quy tắc
            for (let i = 0; i < rules.length; i++) {
                if (!rules[i](args[i])) {
                    throw new Error(`Argument at position ${i} is invalid for function '${propertyKey}'`);
                }
            }
            // Gọi hàm thực tế nếu tất cả các đối số đều hợp lệ
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
// Ví dụ sử dụng
let Calculator1 = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _add_decorators;
    let _multiply_decorators;
    return _a = class Calculator1 {
            add(a, b) {
                return a + b;
            }
            multiply(a, b) {
                return a * b;
            }
            constructor() {
                __runInitializers(this, _instanceExtraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _add_decorators = [validateDecorator1([
                    (arg) => typeof arg === 'number' && arg > 0, // Quy tắc 1: tham số đầu tiên phải là số và lớn hơn 0
                    (arg) => typeof arg === 'number' && arg > 0 // Quy tắc 2: tham số thứ hai phải là số và lớn hơn 0
                ])];
            _multiply_decorators = [validateDecorator1([
                    (arg) => typeof arg === 'number' && arg > 0, // Quy tắc 1: tham số đầu tiên phải là số và lớn hơn 0
                    (arg) => typeof arg === 'number' && arg > 0 // Quy tắc 2: tham số thứ hai phải là số và lớn hơn 0
                ])];
            __esDecorate(_a, null, _add_decorators, { kind: "method", name: "add", static: false, private: false, access: { has: obj => "add" in obj, get: obj => obj.add }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _multiply_decorators, { kind: "method", name: "multiply", static: false, private: false, access: { has: obj => "multiply" in obj, get: obj => obj.multiply }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
// Kiểm tra các hàm đã được decoratored
const calculator1 = new Calculator1();
try {
    console.log(calculator1.add(3, 5)); // Hợp lệ, in ra 8
    console.log(calculator1.add(-1, 5)); // Không hợp lệ, ném ra lỗi
}
catch (error) {
    console.error(error.message);
}
try {
    console.log(calculator1.multiply(4, 6)); // Hợp lệ, in ra 24
    console.log(Calculator1.multiply(4, -2)); // Không hợp lệ, ném ra lỗi
}
catch (error) {
    console.error(error.message);
}
