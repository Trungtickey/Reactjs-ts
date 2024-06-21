
import Grandfather from './hook_context/Grandfather';
import { createContext } from 'react';

// Khởi tạo context 
export const ThemeContext = createContext<{id:number, name: string}|null>(null)

function App(){
  const data = {
    id: 10,
    name: "Nguyễn Văn A"
  }
  // App >> Grandfather >> parent >> children
  // Context : Tạo ra 1 vùng dùng chung
  return (
    <>
    {/* {Bao bọc các component sử dụng chung global state} */}
    <ThemeContext.Provider value={data}>
      <Grandfather/>
      {/* <Home/> */}
    </ThemeContext.Provider>
    </>
  ) 
}
export default App 