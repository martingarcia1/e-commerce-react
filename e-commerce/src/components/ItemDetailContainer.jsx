import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../data/courses';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    const handleAddToCart = (quantity) => {
        console.log(`Agregados ${quantity} curso(s) al carrito`);
    };

    return (
        <div className="item-detail">
            <img src={item.image} alt={item.title} />
            <div className="detail-info">
                <h2>{item.title}</h2>
                <p className="category">{item.category}</p>
                <p className="description">{item.description}</p>
                <p className="price">${item.price}</p>
                <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
            </div>
        </div>
    );
};

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchItem = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const course = courses.find(c => c.id === parseInt(id));
                    resolve(course);
                }, 500);
            });
        };

        fetchItem().then(response => setItem(response));
    }, [id]);

    if (!item) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
