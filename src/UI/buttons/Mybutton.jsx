import React from 'react'
import classes from './button.module.css'

const Mybutton = ({children, ...props}) => {
  return (
    <div>
        <button {...props} className={classes.mBtn}>{children}</button>
    </div>
  )
}

export default Mybutton