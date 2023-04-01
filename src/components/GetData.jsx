import React from 'react'

function GetData({ image, name, price}) {
  return (
    <div className="menuDados">
      <div style={{ backgroundImage: `url(${image})`}}></div>
      <h1>{name}</h1>
      <p>R${price}</p>
    </div>
  )
}

export default GetData