import React from 'react'

const Button = () => {
  function showMessage(){
    alert("Hello Student!");
  }
  return (
    <button onClick={showMessage}>Change</button>
  )
}

export default Button
