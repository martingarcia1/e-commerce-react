function CartWidget() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span role="img" aria-label="carrito" style={{ fontSize: 24, marginRight: 8 }}>🛒</span>
      <span style={{ fontWeight: 'bold' }}>3</span>
    </div>
  );
}

export default CartWidget; 