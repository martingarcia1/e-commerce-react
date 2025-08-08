import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
    const [buyer, setBuyer] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    const { cart, getTotalPrice, clearCart } = useCart();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const order = {
                buyer,
                items: cart.map(item => ({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    quantity: item.quantity
                })),
                total: getTotalPrice(),
                date: new Date()
            };

            const docRef = await addDoc(collection(db, 'orders'), order);
            setOrderId(docRef.id);
            clearCart();
            
            // Mostrar el ID de la orden por 3 segundos y luego redirigir
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (error) {
            console.error("Error al procesar la orden:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    if (loading) {
        return <div className="loading">Procesando su orden...</div>;
    }

    if (orderId) {
        return (
            <div className="order-success">
                <h2>¡Gracias por tu compra!</h2>
                <p>Tu número de orden es: {orderId}</p>
                <p>Serás redirigido al inicio en unos segundos...</p>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h2>Finalizar Compra</h2>
            <form onSubmit={handleSubmit} className="checkout-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre completo</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={buyer.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={buyer.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={buyer.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="order-summary">
                    <h3>Resumen de la orden</h3>
                    <p>Total a pagar: ${getTotalPrice()}</p>
                </div>
                <button type="submit" className="submit-order">
                    Confirmar Compra
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
