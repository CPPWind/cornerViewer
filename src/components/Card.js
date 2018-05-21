import React from 'react'

const Card = ({ title, subtitle, children }) => {

  return (
    <article className="card">
      <header>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </header>
      {children}
    </article>
  )
}

export default Card