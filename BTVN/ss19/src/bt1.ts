function logDecorator(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling function '${propertyKey}' with arguments ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`Function '${propertyKey}' returned ${result}`);
        return result;
    };

    return descriptor;
}

// Sử dụng decorator
class Example {
    add(a: number, b: number): number {
        return a + b;
    }
    greet(name: string, greeting: string = "Hello"): string {
        return `${greeting}, ${name}!`;
    }
}

// Gọi các hàm để kiểm tra decorator
const example = new Example();
const resultAdd = example.add(2, 3);
const resultGreet = example.greet("Tickey", "Lô ní");
