import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartItem = ({ id, title, price, quantity, image }) => {
    const { removeItem } = useCart();

    return (
        <div className="cart-item">
            <img src={image} alt={title} />
            <div className="item-details">
                <h3>{title}</h3>
                <p>Precio: ${price}</p>
                <p>Cantidad: {quantity}</p>
                <p>Subtotal: ${price * quantity}</p>
                <button onClick={() => removeItem(id)} className="remove-button">
                    Eliminar
                </button>
            </div>
        </div>
    );
};

const Cart = () => {
    const { cart, clearCart, getTotalPrice } = useCart();

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <h2>Tu carrito está vacío</h2>
                <Link to="/" className="continue-shopping">
                    Ir a comprar
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h2>Tu Carrito</h2>
            <div className="cart-items">
                {cart.map(item => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
            <div className="cart-summary">
                <h3>Total: ${getTotalPrice()}</h3>
                <button onClick={clearCart} className="clear-cart">
                    Vaciar Carrito
                </button>
                <Link to="/checkout" className="checkout-button">
                    Finalizar Compra
                </Link>
            </div>
        </div>
    );
};

export default Cart;
