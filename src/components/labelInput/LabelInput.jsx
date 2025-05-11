import React from 'react'
import Style from "./LabelInput.module.css"

function LabelInput({forForms, type, id, name, placeholder, required, textLabel, props, setProps}) {
  return (
    <div className={Style.div}>
        <label htmlFor={forForms}>{textLabel}</label>
        <input type={type} id={id} name={name} required={required} placeholder={placeholder} value={props} onChange={(e) => setProps(e.target.value)}/>
    </div>
  )
}

export default LabelInput