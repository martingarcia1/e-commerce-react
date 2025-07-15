import { Link } from 'react-router-dom';

const Item = ({ id, title, image, price, category }) => {
    return (
        <div className="course-card">
            <img src={image} alt={title} className="course-image" />
            <div className="course-info">
                <h3>{title}</h3>
                <p className="category">{category}</p>
                <p className="price">${price}</p>
                <Link to={`/item/${id}`} className="view-button">
                    Ver detalles
                </Link>
            </div>
        </div>
    );
};

export default Item;
