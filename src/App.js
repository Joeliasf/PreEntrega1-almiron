import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./components/Cart/Cart"
import CartContextProvider from "./context/CartContext";
import Form from "./components/Form/Form";

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
    <Navbar />

    <Routes>

      <Route path="/" element={<ItemListContainer />} />
      
      <Route path="/category/:categoryName" element={<ItemListContainer />} />

      <Route path="/category" element={<ItemListContainer />}/>

      <Route path="/checkout" element={ <Form /> } />

      <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />

      <Route path="/cart" element={ <Cart /> } />

      <Route path="*" element={ <h2>Url no encontrada</h2> } />

    </Routes>
    </CartContextProvider>
  
  </BrowserRouter>

);

}


export default App;
