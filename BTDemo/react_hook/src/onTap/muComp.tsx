import {useEffect, useState} from 'react'

const MyComp = () => {

    // controlled component
    // useState : là hook quản lí trạng thái của component
    const [name, setName] = useState(""); // số chuỗi
    const [age, setAge] = useState(""); // số nguyên
    const [gender, setGender] = useState("true"); // chuỗi

    console.log("State =>>>", {name, age, gender});

    // useEffect : là hook dùng can thiệp vào vòng đời của component

    // return trong useEffect là 1 hàm dọn dẹp
    // return()=> {
    //     console.log("dọn dẹp rác trước khi component bị unmount");
        
    // }
    // Có 3 cách dùng
    useEffect(()=>{
        // ko phụ thuộc: tự gọi sau khi component được mount hoặc sau mỗi update
        console.log("useEffect ko có dependency");
    })
    useEffect(()=>{
        // Có 1 phụ thuộc là mảng rỗng: được gọi 1 lần duy nhất sau khi component rỗng
        console.log("useEffect có phụ thuộc là 1 mảng rỗng");
    },[])
    useEffect(()=>{
        // Có 2 phụ thuộc là name và age : được gọi sau khi component đc mount hoặc sau khi có sự thay đổi của 2 phụ thuộc là name và age
        console.log("useEffect có phụ thuộc là 1 mảng ko rỗng");
        
    }, [name,age])


    return(
        <div>
             <form>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="nhập tên" /><br />
                <input type="text" value={age} onChange={e=>setAge(e.target.value)} placeholder="nhập tuổi" /><br />
                <select value={gender} onChange={e=>setGender(e.target.value)}>
                    <option value="true">Nam</option>
                    <option value="false">Nữ</option>
                </select>
             </form>
        </div>
    )
}

export default MyComp