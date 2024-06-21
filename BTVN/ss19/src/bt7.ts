// Viết một class với decorator có thể áp dụng được nhiều hàm middlewares đến 1 hàm target. Hàm middlewares có thể truy cập đươc tham số của hàm original và định nghĩa được chúng hoặc có thể biểu diễn phương thức khác trước hoặc sau khi hàm originals được gọi

type Middleware<T> = (original: T, ...args: any[]) => T;

// Decorator to apply multiple middlewares to a target method
function applyMiddlewares<T>(...middlewares: Middleware<T>[]): MethodDecorator {
  return (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
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
  @applyMiddlewares(
    (original: number, ...args: any[]) => {
      console.log(`Middleware 1: Original value is ${original}`);
      return original + args.reduce((sum, arg) => sum + arg, 0);
    },
    (original: number, ...args: any[]) => {
      console.log(`Middleware 2: Original value is ${original}`);
      return original * args.length;
    }
  )
  calculate(...values: number[]): number {
    return values.reduce((sum, value) => sum + value, 0);
  }
}

const exampleInstance2 = new Example2();
console.log(exampleInstance2.calculate(2, 3, 4));