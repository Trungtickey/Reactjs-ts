// import React, { useState, useCallback, useEffect, ChangeEvent, FormEvent  } from 'react'
import {useState, useMemo } from 'react'
import {data as initData} from './data'
import './student.css'

type Action = "ADD" | "EDIT" | "DELETE" | "BLOCK" | "";// Kiểu ac tion cho thao tác thường dùng

type Student = // Kiểu dữ liệu cho
    {
        id: number,
        name: string
        , dateOfbirth: string
        , email: string,
        address: string,
        status: boolean
    }

const initState = {
    id: 0,
    name: "",
    dateOfbirth: "",
    email: "", 
    address:"",
    status: true
}

const Student = () => {
    const [data, setData] = useState(initData); // data là mảng chứa các dữ liệu mẫu 
    const [action, setAction] = useState<Action>("") // thao tác của người dùng (block , delete, add, edit)
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState<Student>(initState) // dùng để lưu trữ đối tượng đang thao tác ()
    const [size , setSize] = useState(1) // kích thước phần tử trên 1 trang
    const [currentPage, setCurrentPage] = useState(2); // số trang hiện tai 


    // ví dụ :
    // TotalElements  = 101
    // size = 10 
    // pagecurrent = 3 
    // totalPages =  Math.ceil(totalElements/size);

    // index => 20 -> 29
    // startIndex = (pagecurrent-1)size = pagecurrent*size - size
    // endIndex = pagecurrent*size -1


    const handleOpenModal = (action: Action) => {
        setAction(action); // thay đổi hành động
        setIsOpen(true); // mở modal
    }
    const handleCloseModal = () => {
        setAction(""); // xoá hành động
        setIsOpen(false); // đóng modal
    }

    // hàm xóa
    const handleDelete=()=>{
        const newData = data.filter(stu=>stu.id !== selected.id)
        setData(newData)
        setAction("")
        setIsOpen(false)
    }
    // thay đổi trạng thái
    const handleBlock = ()=>{
        const newData = data.map(stu=>{
            //chỉnh sủa trạng thái 
            if(stu.id === selected.id){
                // cập nhật trạng thái
                stu.status = !stu.status
            }
            return stu;
        }) 
        // map để chuyển đổi lần lượt từng phần tử của mảng nãy thành mảng kia
        // hàm bên trong của hàm map return về 
        setData(newData)
        setAction("")
        setIsOpen(false)
    }
    // quản lí sự thay đổi ô input 
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        let name = e.target.name;
        let value = e.target.value;
        setSelected({...selected, [name]:value})
    }
 
    // xử lí submit form 
    const handleSubmitForm = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault(); // loại bỏ sự kiện load trang
        // phân chia chức năng
        if(action == "ADD"){
            // thêm mới
            const newStudent : Student = {
                ...selected,
                id : data[data.length - 1].id+1,
                status: true
            }
            setData([...data,newStudent]) 
        }else{
            // chỉnh sửa
            const newData = data.map(stu=>{
                if(stu.id === selected.id){
                    stu = selected;
                }
                return stu;
            })
            setData(newData)
        }
        setAction("")
        setIsOpen(false)
    }

    // tính tổng số trang 
    const totalPages = useMemo(()=>{
        return Math.ceil(data.length / size)
    },[data,size])

    // lọc các phần tử theo page và size 
    const filterData = useMemo(()=>{
        const start = (currentPage-1)*size
        const end = currentPage*size;
        // start <= index <end 
        return data.slice(start,end)
    },[data,currentPage,size])
    

    return (
        <>
            <div>
                <div className="w-[80%] m-auto mt-4 h-[100vh]">
                    <main className="main">
                        <header className="d-flex justify-content-between mb-3">
                            <h3>Nhân viên</h3>
                            <button className="btn btn-primary" onClick={() => handleOpenModal("ADD")}>Thêm mới nhân viên</button>
                        </header>
                        <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
                            <input style={{ width: 350 }} type="text" className="form-control" placeholder="Tìm kiếm theo email" />
                            <i className="fa-solid fa-arrows-rotate" title="Refresh" />
                        </div>
                        {/* Danh sách nhân viên */}
                        <table className="table table-bordered table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Họ và tên</th>
                                    <th>Ngày sinh</th>
                                    <th>Email</th>
                                    <th>Địa chỉ</th>
                                    <th>Trạng thái</th>
                                    <th colSpan={3}>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterData.map((student, index) => <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{student.name}</td>
                                        <td>{student.dateOfBirth}</td>
                                        <td>{student.email}</td>
                                        <td>{student.address}</td>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                                <div className={`status status-${student.status ? 'active' : 'stop'}`} />
                                                <span>{student.status ? "Đang hoạt động" : "Ngừng hoạt động"}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`button button-${student.status?"block":"unblock"}`} onClick={() => {
                                                handleOpenModal("BLOCK")
                                                setSelected(student)
                                                }}>{student.status?"Chặn":"Mở Chặn"}</span>
                                        </td>
                                        <td>
                                            <span className="button button-edit" onClick={() =>{ handleOpenModal("EDIT")
                                                setSelected(student)
                                            }}>Sửa</span>
                                        </td>
                                        <td><span className="button button-delete" onClick={() =>{ 
                                            handleOpenModal("DELETE")
                                            // cập nhật selected 
                                            setSelected(student)
                                        }}>Xóa</span></td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                        <footer className="d-flex justify-content-end align-items-center gap-3">
                            <select className="form-select" value={size} onChange={(e)=>setSize(+e.target.value)}>
                                <option value={2}>Hiển thị 2 bản ghi trên trang</option>
                                <option value={5}>Hiển thị 5 bản ghi trên trang</option>
                                <option value={8}>Hiển thị 8 bản ghi trên trang</option>
                                <option value={10}>Hiển thị 10 bản ghi trên trang</option>
                            </select>
                            <ul className="pagination">
                                <li className={`page-item ${currentPage == 1 ? "disabled":""}`}>
                                    <a className="page-link" href="#" onClick={()=>setCurrentPage(currentPage-1)}>Previous</a>
                                </li>
                                {/*  đổ ra số trang tương ứng voviws số thẻ li */}
                                {
                                    Array.from(new Array(totalPages),(_, index)=>index+1).map((page,index)=>
                                        <li className={`page-item ${currentPage == page?"active":""}`}><a onClick={()=>setCurrentPage(page)} className="page-link" href="#">{index+1}</a></li>
                                    )
                                }
                                
                               
                                <li className={`page-item ${currentPage == totalPages ? "disabled":""}`}><a onClick={()=>setCurrentPage(currentPage+1)} className="page-link" href="#">Next</a></li>
                            </ul>
                        </footer>
                    </main>
                </div>
                {/* Form thêm mới/ chỉnh sửa nhân viên */}
                <div className="overlay" hidden={!((action == "EDIT" || action == "ADD") && isOpen)}>
                    <form className="form" onSubmit={handleSubmitForm}>
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>{action==="ADD"?"Thêm mới":"Chỉnh Sửa"} nhân viên</h4>
                            <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="userName">Họ và tên</label>
                            <input id="userName" type="text" name='name' value={selected.name} onChange={handleChangeInput} className="form-control" />
                            {/* <div class="form-text error">Họ và tên không được để trống.</div> */}
                        </div>
                        <div>
                            <label className="form-label" htmlFor="dateOfBirth">Ngày sinh</label>
                            <input id="dateOfBirth" name='dateOfbirth' value={selected.dateOfbirth} onChange={handleChangeInput} type="date" className="form-control" />
                        </div>
                        {/* <div class="form-text error">Ngày sinh không được lớn hơn ngày hiện tại.
  </div> */}
                        <div>
                            <label className="form-label" htmlFor="email">Email</label>
                            <input id="email" name='email' value={selected.email} onChange={handleChangeInput} type="text" className="form-control" />
                        </div>
                        {/* <div class="form-text error">Email không được để trống.</div> */}
                        <div>
                            <label className="form-label" htmlFor="address">Địa chỉ</label>
                            <textarea className="form-control" name='address' value={selected.address} onChange={handleChangeInput} id="address" rows={3} defaultValue={""} />
                        </div>
                        <div>
                            <button type='submit' className="w-100 btn btn-primary">{action=="ADD"?"Thêm mới":"Cập nhật"}</button>
                        </div>
                    </form>
                </div>
                {/* Modal xác nhận chặn tài khoản */}
                <div className="overlay" hidden={!(action == "BLOCK" && isOpen)}>
                    <div className="modal-custom">
                        <div className="modal-title">
                            <h4>Cảnh báo</h4>
                            <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
                        </div>
                        <div className="modal-body-custom">
                            <span>{`Bạn có chắc chắn muốn ${selected.status?"chặn":"mở chặn"} tài khoản này?`}</span>
                        </div>
                        <div className="modal-footer-custom">
                            <button className="btn btn-light" onClick={handleCloseModal}>Hủy</button>
                            <button className="btn btn-danger" onClick={handleBlock}>Xác nhận</button>
                        </div>
                    </div>
                </div>
                {/* Modal xác nhận xóa tài khoản */}
                <div className="overlay" hidden={!(action == "DELETE" && isOpen)}>
                    <div className="modal-custom">
                        <div className="modal-title">
                            <h4>Cảnh báo</h4>
                            <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
                        </div>
                        <div className="modal-body-custom">
                            <span>Bạn có chắc chắn muốn xóa tài khoản này?</span>
                        </div>
                        <div className="modal-footer-custom">
                            <button className="btn btn-light" onClick={handleCloseModal}>Hủy</button>
                            <button className="btn btn-danger" onClick={handleDelete}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// interface StudentData {
//   id: number;
//   name: string;
//   dateOfBirth: string;
//   email: string;
//   address: string;
//   status: boolean
// }

// type FormState = {
//   id: number| null,
//   name: string;
//   dateOfBirth: string;
//   email: string;
//   address: string;
//   status: boolean 
// };

// type ModalType = "create" | "update" | "delete" | "block" | "";

// const Student: React.FC = () => {
//   const [data, setData] = useState<StudentData[]>(initData);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [formState, setFormState] = useState<FormState>({
//     id: null,
//     name: "",
//     dateOfBirth: "",
//     email: "",
//     address: "",
//     status: true, 
//   });
//   const [ModalType, setModalType] = useState<ModalType>("");
//   const [selectedUser, setSelectedUser] = useState<StudentData | null>(null);
//   const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

//   const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>{
//     setSearchTerm(e.target.value);
//   };

//   const handleRefresh = () => {
//     setSearchTerm("");
//   }

//   const handleOpenModal = useCallback(
//     (type: ModalType, user: StudentData | null = null) => {
//       setModalType(type);
//       setSelectedUser(user);
//       if (user) {
//         setSelectedUserId(user.id);
//         setFormState(user);
//       } else {
//         setFormState({
//           id: null,
//           name: "",
//           dateOfBirth: "",
//           email: "",
//           address: "",
//           status: true,
//         });
//       }
//     },
//     []  
//   );

//   const handleCloseModal = () => {
//     setModalType("");
//     setSelectedUser(null);
//     setSelectedUserId(null);
//     setFormState({
//       id: null,
//       name: "",
//       dateOfBirth: "",
//       email: "",
//       address: "",
//       status: true,
//     });
//   };

//   const handleFormChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { id, value } = e.target;
//     setFormState((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (ModalType === "create") {
//       setData((prev) => [...prev, { ...formState, id: prev.length + 1 }]);
//     } else if (ModalType === "update" && formState.id) {
//       setData((prev: any) =>
//         prev.map((item: any) => (item.id === formState.id ? formState : item))
//       );
//     }
//     handleCloseModal();
//   };

//   const handleDelete = useCallback(() => {
//     if (selectedUserId !== null) {
//       setData((prev) => prev.filter((item) => item.id !== selectedUserId));
//     }
//     handleCloseModal();
//   }, [selectedUserId]);

//   const handleToggleStatus = useCallback(() => {
//     if (selectedUserId !== null) {
//       setData((prev) =>
//         prev.map((item) =>
//           item.id === selectedUserId ? { ...item, status: !item.status } : item
//         )
//       );
//     }
//     handleCloseModal();
//   }, [selectedUserId]);

//   useEffect(() => {
//     if (selectedUser) {
//       setSelectedUserId(selectedUser.id);
//     }
//   }, [selectedUser]);

//   const filteredData = data.filter((user) =>
//     user.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//  <div>
//       <div className="w-[80%] m-auto mt-4 h-[100vh]">
//         <main className="main">
//           <header className="d-flex justify-content-between mb-3">
//             <h3>Nhân viên</h3>
//             <button
//               className="btn btn-primary"
//               onClick={() => handleOpenModal("create")}
//             >
//               Thêm mới nhân viên
//             </button>
//           </header>
//           <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
//             <input
//               style={{ width: 350 }}
//               type="text"
//               className="form-control"
//               placeholder="Tìm kiếm theo email"
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//             <i
//               className="fa-solid fa-arrows-rotate"
//               title="Refresh"
//               onClick={handleRefresh}
//             />
//           </div>

//           <table className="table table-bordered table-hover table-striped">
//             <thead>
//               <tr>
//                 <th>STT</th>
//                 <th>Họ và tên</th>
//                 <th>Ngày sinh</th>
//                 <th>Email</th>
//                 <th>Địa chỉ</th>
//                 <th>Trạng thái</th>
//                 <th colSpan={3}>Chức năng</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredData.map((stu, index) => (
//                 <tr key={stu.id}>
//                   <td>{index + 1}</td>
//                   <td>{stu.name}</td>
//                   <td>{stu.dateOfBirth}</td>
//                   <td>{stu.email}</td>
//                   <td>{stu.address}</td>
//                   <td>
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: 8,
//                       }}
//                     >
//                       <div
//                         className={`status status-${
//                           stu.status ? "active" : "stop"
//                         }`}
//                       />
//                       <span>
//                         {stu.status ? "Đang hoạt động" : "Ngừng hoạt động"}
//                       </span>
//                     </div>
//                   </td>
//                   <td>
//                     <span
//                       className="button button-block"
//                       onClick={() => handleOpenModal("block", stu)}
//                     >
//                       {stu.status ? "Chặn" : "Bỏ chặn"}
//                     </span>
//                   </td>
//                   <td>
//                     <span
//                       className="button button-edit"
//                       onClick={() => handleOpenModal("update", stu)}
//                     >
//                       Sửa
//                     </span>
//                   </td>
//                   <td>
//                     <span
//                       className="button button-delete"
//                       onClick={() => handleOpenModal("delete", stu)}
//                     >
//                       Xóa
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <footer className="d-flex justify-content-end align-items-center gap-3">
//             <select className="form-select">
//               <option>Hiển thị 10 bản ghi trên trang</option>
//               <option>Hiển thị 20 bản ghi trên trang</option>
//               <option>Hiển thị 50 bản ghi trên trang</option>
//               <option>Hiển thị 100 bản ghi trên trang</option>
//             </select>
//             <ul className="pagination">
//               <li className="page-item">
//                 <a className="page-link" href="#">
//                   Previous
//                 </a>
//               </li>
//               <li className="page-item">
//                 <a className="page-link" href="#">
//                   1
//                 </a>
//               </li>
//               <li className="page-item">
//                 <a className="page-link" href="#">
//                   2
//                 </a>
//               </li>
//               <li className="page-item">
//                 <a className="page-link" href="#">
//                   3
//                 </a>
//               </li>
//               <li className="page-item">
//                 <a className="page-link" href="#">
//                   Next
//                 </a>
//               </li>
//             </ul>
//           </footer>
//         </main>
//       </div>

//       {ModalType && (
//         <div className="overlay">
//           {ModalType === "create" || ModalType === "update" ? (
//             <form className="form" onSubmit={handleFormSubmit}>
//               <div className="d-flex justify-content-between align-items-center">
//                 <h4>
//                   {ModalType === "create" ? "Thêm mới" : "Chỉnh sửa"} nhân viên
//                 </h4>
//                 <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
//               </div>
//               <div>
//                 <label className="form-label" htmlFor="name">
//                   Họ và tên
//                 </label>
//                 <input
//                   id="name"
//                   type="text"
//                   className="form-control"
//                   value={formState.name}
//                   onChange={handleFormChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="form-label" htmlFor="dateOfbirth">
//                   Ngày sinh
//                 </label>
//                 <input
//                   id="dateOfbirth"
//                   type="date"
//                   className="form-control"
//                   value={formState.dateOfBirth}
//                   onChange={handleFormChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="form-label" htmlFor="email">
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   className="form-control"
//                   value={formState.email}
//                   onChange={handleFormChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="form-label" htmlFor="address">
//                   Địa chỉ
//                 </label>
//                 <textarea
//                   className="form-control"
//                   id="address"
//                   rows={3}
//                   value={formState.address}
//                   onChange={handleFormChange}
//                   required
//                 />
//               </div>
//               <div className="d-flex justify-content-end align-items-center gap-2">
//                 <button
//                   type="button"
//                   className="btn btn-light"
//                   onClick={handleCloseModal}
//                 >
//                   Hủy
//                 </button>
//                 <button className="btn btn-primary" type="submit">
//                   {ModalType === "create" ? "Thêm mới" : "Chỉnh sửa"}
//                 </button>
//               </div>
//             </form>
//           ) : ModalType === "delete" ? (
//             <div className="modal-custom">
//               <div className="modal-title">
//                 <h4>Xóa nhân viên</h4>
//                 <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
//               </div>
//               <div className="modal-body-custom">
//                 <span>Bạn có chắc chắn muốn xóa nhân viên này không?</span>
//               </div>
//               <div className="modal-footer-custom">
//                 <button className="btn btn-light" onClick={handleCloseModal}>
//                   Hủy
//                 </button>
//                 <button className="btn btn-danger" onClick={handleDelete}>
//                   Xác nhận
//                 </button>
//               </div>
//             </div>
//           ) : (
//             ModalType === "block" && (
//               <div className="modal-custom">
//                 <div className="modal-title">
//                   <h4>Cảnh báo</h4>
//                   <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
//                 </div>
//                 <div className="modal-body-custom">
//                   <span>
//                     Bạn có chắc chắn muốn{" "}
//                     {selectedUser?.status ? "chặn" : "bỏ chặn"} tài khoản này?
//                   </span>
//                 </div>
//                 <div className="modal-footer-custom">
//                   <button className="btn btn-light" onClick={handleCloseModal}>
//                     Hủy
//                   </button>
//                   <button
//                     className="btn btn-danger"
//                     onClick={handleToggleStatus}
//                   >
//                     Xác nhận
//                   </button>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       )}
//     </div>
// </>

//   )
// }

export default Student
