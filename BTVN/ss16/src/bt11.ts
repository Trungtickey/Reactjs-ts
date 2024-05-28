// cấu trúc 1 node

class Nodes <T>{
    data : T;
    next : Nodes<T>|null;
    constructor(data : T){
        this.data=data;
        this.next=null;
    }
}

// cấu trúc danh sách liên kết
class LinkedList <T> {
    head : Nodes<T>|null;
    tail : Nodes<T>|null;
    constructor(){
        this.head = null;
        this.tail = null;
    }
    append(item : T) :void{

    }
    prepend(item : T) :void{

    }
    delete(item : T) :void{

    }
    toArray(item : T) :void{

    }

}