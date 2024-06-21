import React, { useCallback, useMemo, useState } from 'react'
import Item from './Item';

const List = () => {
    // memo là 1 hook dùng để tăng hiệu năng bằng cách ghi nhớ kết quả tính toán mà ko cần tính toán lai
    const [arr, setArr] = useState([1,2,3]);
    const [count , setCount] = useState(0);

    const total = useMemo(()=>{
        console.log("tính total");
        return arr.reduce((temp, num)=> temp+num, 0);
    },[arr])   // tính tổng

    const handleRandom = ()=>{
        let number = Math.floor(Math.random()*100)
        setArr([...arr, number])
    }

     const handleIncrement = useCallback(()=>{
      console.log("gọi hàm handleIncrement");
      setCount(preCount => preCount+1);// sử dụng callback 
    },[])
  return (
    <div>
      <Item count={count} handleIncrement={handleIncrement}/>
      <p>{total}</p>
      <button onClick={handleRandom}>Random</button>
    </div>
  )
}

export default List