import React, { memo } from 'react'
type PropTypes = {
    count : number,
    handleIncrement : any
}

const Item = ({count, handleIncrement}: PropTypes) => {
    console.log("item bị render");
    
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Tăng</button>
    </div>
  )
}

export default memo(Item);