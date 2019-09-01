import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ index, tech, onDelete }) {
  return (
    <li key={index}>
      {tech}
      <button onClick={() => onDelete(index)} type="button">
        Remover
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Oculto'
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;
