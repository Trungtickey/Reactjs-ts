class Contact{
    constructor(name,sdt,email){
        this.name=name;
        this.sdt=sdt;
        this.email=email;
    }
}


let phoneBooks=[]

function addContact(name, sdt, email){

    const newContact= new Contact(name, sdt, email)

    phoneBooks=[...phoneBooks, newContact]// spread operator
    // phoneBooks.push(newContact)
}

function displayContact(){
    phoneBooks.forEach((contact,index)=>{
        console.log(`${index+1} | Tên: ${contact.name} | SDT: ${contact.sdt} | Email: ${contact.email}`);
    })
}


addContact("Hồ Công Thành Trung", "0357007083", "hocongthanhtrungvn@gmail.com");
addContact("Hồ Công Thành", "0926359170", "congthanh@gmail.com");


displayContact();

