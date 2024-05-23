"use strict";
let data = [
    { id: 1, title: "đi chơi", completed: true },
    { id: 2, title: "đi học", completed: false },
    { id: 3, title: "đi ngủ", completed: false },
];
// lấy ra HTMLElement thoogn qua id
const getElement = (id) => {
    return document.getElementById(id);
};
const addTodo = () => {
    // lấy ra value ô input
    let input = getElement("work");
    // tạo mới todo
    let newTodo = {
        id: data[data.length - 1].id + 1, // logic tự tăng
        title: input.value,
        completed: false
    };
    // thêm vào mảng
    data = [...data, newTodo];
    // render lại giao diện
    renderTodoList(data);
    // đưa ô input về rỗng 
    input.value = "";
};
// hiển thị danh sách
const renderTodoList = (data) => {
    // b1  : lấy thẻ ul để chèn html vào
    let ul = getElement("todoList");
    let html = data.reduce((acc, item) => acc
        + `<li class="list-group-item d-flex justify-content-between">
         <span class="${item.completed ? 'text-decoration-line-through' : ''}">${item.title}</span>
         ${item.completed ? '<i class="bi bi-x-square text-danger" onclick="editTodo(' + item.id + ')"></i>' : '<i class="bi bi-check text-success" onclick="editTodo(' + item.id + ',false)"></i>'}</li>`, "");
    ul.innerHTML = html; // chèn đoạn html vào thẻ ul
};
renderTodoList(data);
// const completeTodo = (id: number): void => {
//     // cập nhật trngj thái của todo 
//     // lấy ra index của todo cần cập nhật
//     let index = data.findIndex(item=>item.id===id);
//     if(index !== -1) {
//         // thay đổi trạng thái về true
//         data[index].completed = true;
//     }
//     // render lại giao diện
//     renderTodoList(data);
// }
// const deleteTodo = (id: number): void => {
//     // lọc những phần tử có id khác với id của todo cần xóa
//     data = data.filter(item=>item.id !== id);
//     // render lại giao diện
//     renderTodoList(data);
// }
const editTodo = (id, status = true) => {
    if (status) {
        // delete  
        data = data.filter(item => item.id !== id);
    }
    else {
        // hoàn thành cv
        let index = data.findIndex(item => item.id === id);
        if (index !== -1) {
            // thay đổi trạng thái về true
            data[index].completed = true;
        }
    }
    // render lại giao diện
    renderTodoList(data);
};