import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../../data/courses';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        setError(null);

        const fetchItem = async () => {
            try {
                // Simulando una llamada a API
                const result = await new Promise((resolve) => {
                    setTimeout(() => {
                        const course = courses.find(c => c.id === parseInt(id));
                        if (!course) {
                            throw new Error('Curso no encontrado');
                        }
                        resolve(course);
                    }, 500);
                });
                setItem(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [id]);

    if (loading) {
        return (
            <div className="container">
                <div className="loading">Cargando...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container">
                <div className="error">{error}</div>
            </div>
        );
    }

    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
