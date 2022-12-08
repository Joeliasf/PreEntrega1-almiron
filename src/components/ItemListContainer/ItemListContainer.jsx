import "./ItemListContainer.css";
import React from 'react'

const ItemListContainer = ( { greeting } ) => {
  return (
    <div>
        <h2 className="greeting-title">{greeting}</h2>
    </div>
  )
}

export default ItemListContainer