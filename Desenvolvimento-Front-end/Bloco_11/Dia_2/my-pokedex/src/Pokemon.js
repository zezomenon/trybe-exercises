import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <section className='pokemon'>
        <div>
          <p>{`Name: ${name}`}</p>
          <p>{`Type: ${type}`}</p>
          <p>{`Average Weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image} alt='Imagem de um pokemon'/>
      </section>
    );
  }
}

export default Pokemon;