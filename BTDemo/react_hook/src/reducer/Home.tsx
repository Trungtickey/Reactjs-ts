import React, { useReducer, useState } from 'react'
// Các thành phần:
// reducer : là nơi xử lí các action và cập nhật state
// action : đại diện cho chức năng cần xử lý
// state : trạng thái của reducer 

const reducer = (state = 0, action: string)=>{
    // action là hành vi được gửi lên thông qua dispatch
    switch(action){
        case "increament 1": 
            return state+1;
        case "increament 2":
            return state+2;
        case "increament 3":
            return state+3;
        default:
            return state;
    }
}
const Home = () => {
    // const[count, setCount] = useState(0);
    const[count, dispatch] = useReducer(reducer,0,undefined);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> dispatch("increament 1")}>Tăng count lên 1</button>
      <button onClick={()=> dispatch("increament 2")}>Tăng count lên 2</button>
      <button onClick={()=> dispatch("increament 3")}>Tăng count lên 3</button>
    </div>
  )
}

export default Home
