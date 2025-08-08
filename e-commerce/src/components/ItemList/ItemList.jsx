import Item from '../Item/Item';

const ItemList = ({ courses }) => {
    return (
        <div className="courses-grid">
            {courses.map(course => (
                <Item key={course.id} {...course} />
            ))}
        </div>
    );
};

export default ItemList;
