// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { Component, ReactNode } from "react";
import ListStudent from "./components/ListStudent";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormStudent from "./components/FormStudent";
import Modal from "./baitap12/Modal";
import Calculator from "./baitaptonghop/Calculator"

export interface IStudent {
  id: number;
  name: string;
  dob: string;
  address: string;
  phone: string;
  sex: boolean
}
type StateType = {
  data: IStudent[],
  isAdd : boolean,
  studentEdit: IStudent|undefined,
}

class App extends Component<{}, StateType> {
  // thiết kế ứng dụng quản lí sinh viên   
  // danh sách sinh viên 
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Huỳnh Tam Anh",
          dob: "2005-02-15",
          address: "Sài Gòn",
          phone: "0984384363",
          sex: true
        },
        {
          id: 2,
          name: "Kha Hào",
          dob: "2005-05-05",
          address: "An Giang",
          phone: "0994874363",
          sex: false
        },
      ]
      ,
      isAdd : true,
      studentEdit : undefined
    }
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(id: number) {
    // lấy danh sách sau khi xóa
    let afterDeleteList = this.state.data.filter(item => item.id != id);
    // cập nhật lại danh sách
    this.setState({
      ...this.state,
      data: afterDeleteList
    })
  }
  handleAddStudent = (student : IStudent)=>{
    this.setState({
      ...this.state,
      data : [...this.state.data, student]
    })
  }
  handleEditStudent = (id : number)=>{
    // láy đc id 
    this.setState({
     ...this.state,
      isAdd : false,
      studentEdit : this.state.data.find(item=> item.id === id)
    })
  }
  // khai báo các thuộc tính 
  render() {
    return (
      <div className="container">
        {/* 
        Ứng dụng máy tính : 
         có 10 con số : 0 - 9
         1 màn hình hiển thị phép tính 
         các phép : + , - 
        */}

        <Calculator/>
      </div>
    )
  }
}

export default App
