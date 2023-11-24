import React from 'react'
import './style.css'

export default ({background, text, borderColor, size, solid=false, onClick }) => {
    
    return (
        !solid ? (
          <button onClick={onClick} style={{ background: background, borderColor: background }} className={`btn ${size}`}>
            {text}
          </button>
        ) : (
          <button onClick={onClick} style={{ background: background, borderColor: borderColor }} className={`btn ${size}`}>
            {text}
          </button>
        )
      )
}