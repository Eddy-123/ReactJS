import React from 'react'
import './myStyles.css'


function Stylesheet({primary}){
  let className = primary ? 'primary' : ''
  return (
    <h1 className={`${className} font-xl`}>Stylesheets</h1>
  )
}

export default Stylesheet
