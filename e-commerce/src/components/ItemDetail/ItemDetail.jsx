import PropTypes from 'prop-types';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
    const handleAddToCart = (quantity) => {
        console.log(`Agregados ${quantity} curso(s) al carrito`);
    };

    if (!item) {
        return <div>No se encontró el curso</div>;
    }

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

ItemDetail.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
    })
};

export default ItemDetail;
