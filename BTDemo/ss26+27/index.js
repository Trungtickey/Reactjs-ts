console.log("reactjs", React)// root, đối tượng gốc(document)
const domContainer = document.querySelector("#root");

// Tạo node gốc của dom ảo
const root = React.creatRoot(domContainer);

// Đẻ con và hiện thị

// basic
// let P=React.createElement( // Tạo ra 1 node P
//     "p",
//     {
//         id: "children",
//         class:"con",
//         name: "child",  
//     },
//     "Liên Vơng"
// );

let P=(
    <p id="hehe">
        kuku
    </p>
);
root.render(P);