// rfc : react function component 
// rafc : react arrow function component

import { useEffect, useState } from 'react'
import Children from './Children'

const Parent   = () => {
    // state : hook useState giúp quản lí trạng thái
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Huỳnh Tâm Anh")
    // useState trả về 1 mảng gồm 2 phần tử , phần tử 1 là trạng thái 
    //, phần tử thứ 2 là 1 hàm dùng để cập nhật trạng thái

    // YÊU CẦU LƯU TRỮ NHIỀU STATE : tạo thêm các state khác nhau


    // effect : hook useEffect giúp can thiệp vào các giai đoạn của component 
    // 3 cách dùng 
    useEffect(()=>{
        console.log("useEffect cách dùng 1 : ko có phụ thuộc , sẽ được gọi sau mỗi lần component render hoặc rerender")   
            // chú ý return trong useEffect là 1 hàm dọn dẹp 
            return ()=>{
                console.log("dọn dẹp rác trước khi component unmount");
            }
    })

    // useEffect(()=>{
    //     console.log("useEffect cách dùng 2 : có phụ thuộc là 1 mảng rỗng  , sẽ được gọi 1 lần duy nhất sau khi component mounting") 
    // },[])

    // useEffect(()=>{
    //     console.log("useEffect cách dùng 2 : có phụ thuộc là 1 mảng ko rỗng  , sẽ được gọi khi component đc mount và mỗi lần sau khi phụ thuộc bị thay đổi") 
    // },[count,name])

     return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
            <p>{name}</p>
            <button onClick={() => setName("Huỳnh Trâm Anh 1")}>Đổi tên em đi</button>

            <Children countProp={count} nameProp={name} setCountProp={setCount} setNameProp={setName}>{name + " hehe"}</Children>
        </div>
    )
}

export default Parent