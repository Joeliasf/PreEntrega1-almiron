import { useContext, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import swal from "sweetalert"
import "./Cart.css"
import CartItem from "../CarItem/CartItem"
import { Button } from "@mui/material"
import NoInfo from "../NoInfo/NoInfo"
import Form from "../Form/Form"
import { useState } from "react"
import { Link } from "react-router-dom"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import Orders from "../Orders/Orders"

const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext)

  const [buy, setBuy] = useState(false)
  const [orderId, setOrderId] = useState(null)

  const [order, setOrder] = useState({})

  const openForm = () => {
    if (cart.length > 0) {
      setBuy(true)
    } else {
      alert("Su carrito esta vacio")
    }
  }

  useEffect(() => {
    if (orderId) {
      const orderCollection = collection(db, "orders")
      const ref = doc(orderCollection, orderId)

      getDoc(ref).then((res) => {
        setOrder({
          id: res.id,
          ...res.data(),
        })
      })
    }
  }, [orderId])

  const limpiar = () => {
    swal({
      title: "¿Desea borrar el carrito?",
      icon: "warning",
      buttons: ["si", "no"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Cancelaste la operacion")
      } else {
        swal("Carrito borrado con exito!", {
          icon: "success",
        })
        clearCart()
      }
    })
  }

  if (orderId) {
    return (
      <div>
        <h1>tu orden de compra es : {orderId}</h1>
        <Orders order={order} />

        <Link to={"/"}>Volver a comprar</Link>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <div className="container-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        {cart.length < 1 && <NoInfo />}
      </div>

      <div className="cart-info">
        <h2>Descripcion del carrito:</h2>
        <h3>Cantidad de productos: </h3>
        <h3>
          Precio total: {getTotalPrice() > 0 ? getTotalPrice() : "No hay items"}
        </h3>
        <h3>Descuento: </h3>
        <h3>Precio final: </h3>

        {buy ? (
          <Form
            cart={cart}
            getTotalPrice={getTotalPrice}
            setOrderId={setOrderId}
            clearCart={clearCart}
          />
        ) : (
          cart.length > 0 && (
            <div className="btn-cart">
              <Button variant="contained" onClick={openForm}>
                Comprar
              </Button>
              <Button onClick={() => limpiar()} variant="contained">
                Vaciar carrito
              </Button>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Cart
