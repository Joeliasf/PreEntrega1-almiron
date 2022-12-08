
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/NavBar"


function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a DushArt, el hogar del arte"} />
    </div>
  );
  
}

export default App;
