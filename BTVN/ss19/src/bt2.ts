type ValidationRule = (arg: any) => boolean;

function validateDecorator(rules: ValidationRule[]) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
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
class Calculator1 {
    @validateDecorator1([
        (arg: any) => typeof arg === 'number' && arg > 0, // Quy tắc 1: tham số đầu tiên phải là số và lớn hơn 0
        (arg: any) => typeof arg === 'number' && arg > 0  // Quy tắc 2: tham số thứ hai phải là số và lớn hơn 0
    ])
    add(a: number, b: number): number {
        return a + b;
    }

    @validateDecorator1([
        (arg: any) => typeof arg === 'number' && arg > 0, // Quy tắc 1: tham số đầu tiên phải là số và lớn hơn 0
        (arg: any) => typeof arg === 'number' && arg > 0  // Quy tắc 2: tham số thứ hai phải là số và lớn hơn 0
    ])
    multiply(a: number, b: number): number {
        return a * b;
    }
}

// Kiểm tra các hàm đã được decoratored
const calculator1 = new Calculator1();

try {
    console.log(calculator1.add(3, 5)); // Hợp lệ, in ra 8
    console.log(calculator1.add(-1, 5)); // Không hợp lệ, ném ra lỗi
} catch (error) {
    console.error(error.message);
}

try {
    console.log(calculator1.multiply(4, 6)); // Hợp lệ, in ra 24
    console.log(Calculator1.multiply(4, -2)); // Không hợp lệ, ném ra lỗi
} catch (error) {
    console.error(error.message);
}
