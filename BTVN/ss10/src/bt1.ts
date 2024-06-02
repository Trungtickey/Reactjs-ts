class Vehicle {
    name:string;
    year:number;
    company:string;
    constructor ( name:string,
        year:number,
        company:string,){
            this.name=name
            this.year=year
            this.company=company
        }
      out(){
        console.log(`${this.name} ${this.year} ${this.company} `)
      }  

}
 let bmw= new Vehicle("hi",2000,"bmw");

 let por= new Vehicle("ha",1000,"porche");
bmw.out()
por.out()