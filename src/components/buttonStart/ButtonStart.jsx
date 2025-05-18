import React from 'react'
import Style from "./ButtonStart.module.css"

function ButtonStart({children}) {
  return (
    <button className={Style.button}>
        {children}
    </button >
  )
}

export default ButtonStart