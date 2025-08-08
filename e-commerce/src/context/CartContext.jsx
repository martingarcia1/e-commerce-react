import { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            const newCart = cart.map(prod => 
                prod.id === item.id 
                ? { ...prod, quantity: prod.quantity + quantity }
                : prod
            );
            setCart(newCart);
        }
    };

    const removeItem = (itemId) => {
        const newCart = cart.filter(prod => prod.id !== itemId);
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    };

    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const value = {
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        getTotalQuantity,
        getTotalPrice
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
