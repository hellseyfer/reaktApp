import React from 'react'

const Button = ({text, click, variant}) => {   //props
  return (
    <button className={`${variant}`} onClick={click} >{text} </button>
  )
}

export default Button