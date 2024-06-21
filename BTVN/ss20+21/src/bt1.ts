// Định nghĩa lớp contact
class Contact{
    name: string;
    email: string;
    phoneNumber: string;


    constructor(name: string, email: string, phoneNumber: string){
        this.name=name;
        this.email=email;
        this.phoneNumber=phoneNumber;
    }
}

// Định nghĩa lớp PhoneBook với kiểu dữ liệu generic
class PhoneBook<T extends Contact> {
    private contacts: T[] = [];
  
    addContact(contact: T): void {
      this.contacts.push(contact);
    }
  
    getContacts(): T[] {
      return this.contacts;
    }
  }
  
  // Decorator để kiểm tra dữ liệu đầu vào
  function validateContact<T extends Contact>(target: PhoneBook<T>, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(contact: T) {
      if (!contact.name || !contact.email || !contact.phoneNumber) {
        throw new Error('Contact information is incomplete.');
      }
      return originalMethod.apply(this, [contact]);
    }
  }
  
  // Áp dụng decorator validateContact cho phương thức addContact
  Object.defineProperty(PhoneBook.prototype, 'addContact', {
    value: PhoneBook.prototype.addContact,
    writable: true,
    configurable: true
  });
  validateContact(PhoneBook.prototype, 'addContact', Object.getOwnPropertyDescriptor(PhoneBook.prototype, 'addContact')!);
  
  // Sử dụng lớp PhoneBook
  const personalPhoneBook = new PhoneBook<Contact>();
  const familyContact = new Contact('John Doe', 'john.doe@example.com', '123-456-7890');
  personalPhoneBook.addContact(familyContact);
  
  console.log(personalPhoneBook.getContacts());
  // Xây dựng lớp GenericNumber với kiểu dữ liệu generic
  class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
  
    constructor(zeroValue: T, addFunction: (x: T, y: T) => T) {
      this.zeroValue = zeroValue;
      this.add = addFunction;
    }
  }
  
  // Sử dụng lớp GenericNumber với kiểu number
  let numberInstance = new GenericNumber<number>(0, (x, y) => x + y);
  
  // Sử dụng lớp GenericNumber với kiểu string
  let stringInstance = new GenericNumber<string>('', (x, y) => x + y);
  
  // Decorator để ghi nhận hoạt động
  function logOperation<T>(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: T[]) {
      const result = originalMethod.apply(this, args);
      console.log(`Operation: ${key}, Arguments: ${args.join(', ')}, Result: ${result}`);
      return result;
    }
  }
  
  // Áp dụng decorator logOperation cho phương thức add của lớp GenericNumber
  Object.defineProperty(GenericNumber.prototype, 'add', {
    value: GenericNumber.prototype.add,
    writable: true,
    configurable: true
  });
  logOperation(GenericNumber.prototype, 'add', Object.getOwnPropertyDescriptor(GenericNumber.prototype, 'add')!);
  
  // Thực hiện phép cộng và ghi nhận hoạt động
  numberInstance.add(1, 2); // Console sẽ ghi: Operation: add, Arguments: 1, 2, Result: 3
  stringInstance.add('Hello ', 'World!'); // Console sẽ ghi: Operation: add, Arguments: Hello , World!, Result: Hello World!