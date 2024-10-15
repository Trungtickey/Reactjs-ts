
import { useEffect } from 'react';
import './App.css'
import Book from './pages/Book'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { createStudent, getAllStudents } from './store/slice/studentSlice';
import { Student } from './interface';

function App() {
const dispatch = useDispatch();

  useEffect(()=>{
      // console.log("tiến hành dispatch action lấy danh sách sinh viên");
      // dispatch(getAllStudents());
      // them mới 
      const newStudent: Student = {
        id: 1,
        name:"Trung Tickey",
        address:"Gò Vấp",
        gender: true,
        phone:"0357007083",
        classId:"KS2023A",
        dob:"2004-03-28"
      } 
      dispatch(createStudent(newStudent))
  },[])
  return (
    <>
      {/* <Book/> */}
    </>
  )
}

export default App