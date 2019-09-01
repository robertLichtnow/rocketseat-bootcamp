import React from 'react';

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

export default TechItem;
