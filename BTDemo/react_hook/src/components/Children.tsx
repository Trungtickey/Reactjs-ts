type PropsType = {
    countProp:number,
    nameProp: string,
    setCountProp: Function,
    setNameProp: Function,
    children : string // thuộc tính đặc biệt của component , nhận nội dung trong cặp thẻ đóng thẻ mở 
}


const Children = ({countProp,nameProp,setCountProp,setNameProp, children} : PropsType) => {
  return (
    <div>
    <h1> content : {children} </h1>
      <p>Count children : {countProp}</p>
      <button onClick={()=>setCountProp(countProp+3)}>Bấm ở nút con</button>
    </div>
  )
}

export default Children