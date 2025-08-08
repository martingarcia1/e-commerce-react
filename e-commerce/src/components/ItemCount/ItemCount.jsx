import { useState } from 'react';

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);

    const handleClickIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleClickDecrement = () => {
       if (count > 1) {
           setCount(count - 1);
       }
    };

    return (
        <div className="item-count">
            <div className="controls">
                <button onClick={handleClickDecrement}>-</button>
                <span>{count}</span>
                <button onClick={handleClickIncrement}>+</button>
            </div>
            <button className="add-to-cart" onClick={() => onAdd(count)}>
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;
