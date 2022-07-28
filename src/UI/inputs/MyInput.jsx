import React from 'react'
import classes from './input.module.css'
export const MyInput = (props) => {
  return (
    <div>
      <input className = {classes.mInp} { ...props}/>
    </div>
  )
}
export default MyInput