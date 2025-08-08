const ItemListContainer = ({ saludo, edad, saludar }) => {
  return (
    <div onClick={saludar}>
      <h1>{saludo}</h1>
      <h2>Edad: {edad}</h2>
    </div>
  );
}


export default ItemListContainer; 