import React from 'react'

export default function CustomButton({displayText, onClick}) {
  return (
    <button onClick={onClick}>{displayText}</button>
  )
}
