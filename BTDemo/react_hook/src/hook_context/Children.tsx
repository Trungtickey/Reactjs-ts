import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const Children = () => {
    const data = useContext(ThemeContext)
    console.log(data); 
  return (
    <div>
      <h1>Children</h1>
    </div>
  )
}

export default Children
