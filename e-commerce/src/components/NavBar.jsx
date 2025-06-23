import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: '#f5f5f5' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/vite.svg" alt="Logo" style={{ width: 40, marginRight: 16 }} />
        <span style={{ fontWeight: 'bold', fontSize: 24 }}>Mi Tienda</span>
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', margin: 0 }}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

NavBar.propTypes = {};

export default NavBar; 