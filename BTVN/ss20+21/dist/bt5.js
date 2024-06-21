"use strict";
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
function validateProduct(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            const instance = this;
            if (!instance.name || instance.name.trim() === "") {
                throw new Error("Product name cannot be empty.");
            }
            if (instance.price <= 0) {
                throw new Error("Product price must be a positive number.");
            }
            if (!instance.description || instance.description.trim() === "") {
                throw new Error("Product description cannot be empty.");
            }
            if (instance.inStock < 0) {
                throw new Error("Product inStock must be a non-negative number.");
            }
        }
    };
}
let Product = (() => {
    let _classDecorators = [validateProduct];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Product = _classThis = class {
        constructor(name, price, description, inStock) {
            this.name = name;
            this.price = price;
            this.description = description;
            this.inStock = inStock;
        }
    };
    __setFunctionName(_classThis, "Product");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Product = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Product = _classThis;
})();
class ProductGeneric {
    constructor(name, price, description, inStock) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = inStock;
    }
}
// Example usage:
try {
    const product1 = new Product("Laptop", 1000, "High-performance laptop", 10);
    console.log(product1);
    // This will throw an error because the price is not positive. Nó sẽ hiện thị lỗi bởi vì giá trị nó không tồn tại. 
    const product2 = new Product("Smartphone", -500, "Latest model smartphone", 20);
}
catch (error) {
    console.error(error);
}
// Using ProductGeneric with different data types. Sử dụng ProductGeneric với các data types khác nhau. 
const productGeneric1 = new ProductGeneric("Tablet", 300, "Portable tablet", 15);
console.log(productGeneric1);
