
import React, { useEffect, useState } from 'react'

import { products } from '../../ProductsMock'

import { useParams } from "react-router-dom"

import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  const { id } = useParams()

  useEffect( ()=>{

    const productSelected = products.find( producto => producto.id === parseInt(id) )
    setProduct(productSelected)

  }, [id])

  return (
    <div className='item-card'>
        <h2>{product.name}</h2>
        <h3>{product.description}</h3>
        <img src={product.img} alt="" />
        <h4>${product.price}</h4>
    </div>
  )
}

export default ItemDetailContainer