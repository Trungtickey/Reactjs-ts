// Tạo đối tượng sách
class Book {
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
}

// Tạo mảng các đối tượng sách 
const books = [
    new Book(1, "Book 1"),
    new Book(2, "Tuổi trẻ đáng giá bao nhiêu"),
    new Book(3, "Tâm Anh không sai chúng ta sai"),
    new Book(4, "Bán chả cá LH TA"),
    new Book(5, "TrungNoPro"),
];

// Tìm kiếm sách trong mảng theo id và kết quả
function findBookById(id){
    const foundBook = books.find(book => book.id === id);
    if (foundBook){
        console.log('ID: ${foundBook')
    }
}