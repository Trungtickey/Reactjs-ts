// Định nghĩa lớp cơ bản Animal
class Animal {
    numLegs: number;
    constructor(numLegs: number) {
      this.numLegs = numLegs;
    }
  }
  
  // Định nghĩa lớp BeeKeeper
  class BeeKeeper {
    hasMask: boolean;
    constructor(hasMask: boolean) {
      this.hasMask = hasMask;
    }
  }
  
  // Định nghĩa lớp ZooKeeper
  class ZooKeeper {
    nameTag: string;
    constructor(nameTag: string) {
      this.nameTag = nameTag;
    }
  }
  
  // Định nghĩa lớp Bee kế thừa từ Animal
  class Bee extends Animal {
    constructor() {
      super(6); // Giả sử ong có 6 chân
    }
  }
  
  // Định nghĩa lớp Lion kế thừa từ Animal
  class Lion extends Animal {
    constructor() {
      super(4); // Giả sử sư tử có 4 chân
    }
  }
  
  // Hàm generic createInstance
  function createInstance<A>(c: new (...args: any[]) => A, ...args: any[]): A {
    return new c(...args);
  }
  
  // Decorator để ghi nhận hoạt động
  function logCreation(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const result = originalMethod.apply(this, args);
      console.log(`Tạo mới đối tượng: ${result.constructor.name}`);
      return result;
    }
  }
  
  // Áp dụng decorator logCreation cho hàm createInstance
  logCreation(window, 'createInstance', Object.getOwnPropertyDescriptor(window, 'createInstance')!);
  
  // Tạo mới các đối tượng sử dụng hàm createInstance
  const bee = createInstance(Bee);
  const lion = createInstance(Lion);
  const beeKeeper = createInstance(BeeKeeper, true); // Giả sử có mặt nạ
  const zooKeeper = createInstance(ZooKeeper, "Tickey"); // Giả sử tên của ZooKeeper là "Tickey"
  
  // Console sẽ ghi: Tạo mới đối tượng: Bee, Lion, BeeKeeper, ZooKeeper
  