import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  state = {
    techs: ['Node.js', 'ReactJS', 'React Native'],
    newTech: ''
  };

  handleInputChange = e => {
    this.setState({
      newTech: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  };

  handleDelete = index => {
    const techs = this.state.techs.filter((elmt, i) => index !== i);
    this.setState({
      techs
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map((tech, index) => (
            <TechItem
              index={index}
              tech={tech}
              key={index}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
