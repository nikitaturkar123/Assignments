import React from 'react'

const Card = ({name,course,college}) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>College: {college}</p>
    </div>
  )
}

export default Card
