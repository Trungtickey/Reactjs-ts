"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 
function validate(validateFn) {
    return function (target, propertyName, descriptor) {
        //logic
        // Lấy ra hàm cần xử lý trước khi chỉnh sửa
        let div = descriptor.value;
        console.log(div);
        // Tiến hành chỉnh sửa
        descriptor.value = (a, b) => {
            // Kiểm tra số b
            if (validateFn(b)) {
                // Hợp lệ
                return div(a, b);
            }
            else {
                // Ko hợp lệ
                throw new Error("Không thể chia cho 0");
            }
        };
    };
}
// Hàm kiểm tra số có =0 hay ko
function checkNumber(a) {
    return a != 0;
}
// Lớp kiểm tra
class Test {
    div(a, b) {
        return a / b;
    }
}
__decorate([
    validate(checkNumber)
], Test.prototype, "div", null);
let test = new Test();
console.log(test.div(3, 2));
console.log(test.div(3, 0));
