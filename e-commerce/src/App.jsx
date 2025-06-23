import './App.css'
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer saludo={"¡Bienvenido a nuestra tienda!"} edad={20} saludar={() => console.log("Hola")}   />
      
    </>
  )
}

export default App
