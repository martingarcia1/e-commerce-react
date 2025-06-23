import PropTypes from "prop-types";

function ItemListContainer({ mensaje }) {
  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{mensaje}</h2>
    </section>
  );
}

ItemListContainer.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default ItemListContainer; 