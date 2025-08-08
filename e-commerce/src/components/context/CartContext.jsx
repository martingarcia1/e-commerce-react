import { Children, createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({Children}) => {
    const [cart, setCart] = useState([]);

    const addProductInCart = (product) => {
      
      
        setCart((prev) => [...prev, product]);
    };

    const totalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const totalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const deleteProductByID = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
        setCart(productsFilter)
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addProductInCart, totalQuantity }}>
            {Children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };