import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/NavBar"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    
    <Navbar />

    <Routes>

      <Route path="/" element={<ItemListContainer />} />
      
      <Route path="/category/:categoryName" element={<ItemListContainer />} />

      <Route path="/category" element={<ItemListContainer />}/>

      <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />

      <Route path="/cart" element={ <h3>Aca se muestra el carrito</h3> } />

      <Route path="*" element={ <h2>Carrito en construccion</h2> } />

    </Routes>

  
  </BrowserRouter>

);

}


export default App;
