import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav>
       <div>
        <p>Avanzar Group</p>
       </div>

       <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
       </ul>

       {/* aca estara el cartwidget o el carrito */}
       <CartWidget />
    </nav>
  );
}


export default NavBar; 