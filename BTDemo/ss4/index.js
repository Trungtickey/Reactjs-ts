// class ---- oop
// oop()- phương pháp lập trình hướng đối tượng


class studen{
    constructor(id, name , age){
        this.id= id;
        this.name= name;
        this.age = age;
    }
    prinInfo(){
        console.log("id: "+ this.id + "| name: " + this.name + "| age: " + this.age);
    }
}
let S1= new studen(1, "kha", 20)
console.log(S1);
S1.prinInfo()



/*

*/