class nhanVien{
    constructor(id,name,age,department){
        this.id=id,
        this.name=name,
        this.age=age,
        this.department=department
    }
}
var employees = [
    { id: 1, name: 'Alice', age: 25, department: 'IT' }, 
    { id: 2, name: 'Bob', age: 20, department: 'IT' }, 
    { id: 3, name: 'Charlie', age: 25, department: 'Marketing' }, 
    { id: 4, name: 'David', age: 35, department: 'IT' }, 
    { id: 5, name: 'Eve', age: 30, department: 'HR' },
];

const youngEmployees = employees.filter(employee => employee.age < 25);
console.log(youngEmployees);