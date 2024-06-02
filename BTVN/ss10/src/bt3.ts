class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo() {
        console.log(`${this.name} ${this.company} ${this.phone}`);
    }

    getPhone() {
        return this.phone;
    }
}

let te = new Employee("Trung", "RealMadrid", "0357007083");
te.printInfo();