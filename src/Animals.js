import React, { Component } from 'react';
import { Link } from 'react-router';
import { getAnimals } from './services/animalService';

import Animal from './Animal';

class Animals extends Component {
  constructor() {
    super();

    this.state = {
      animals: []
    }
  }


  render() {

    const animals = this.state.animals.map((animal, i) => {
      return (
        <Link to={"animals/" + animal.name} >
          <Animal key={i} animal={animal} />
        </Link>
      )
    })

    function shouldDisplayAnimals() {
      if (animals[0]) {
        return animals
      } else {
        return <h1>Loading...</h1>
      }
    }


    return (
      <div>
        <h1>Animals Page</h1>
        {shouldDisplayAnimals()}
      </div>
    )
  }

  componentDidMount() {
    getAnimals().then(animals => {
      this.setState({
        animals: animals
      })
    })
  }
}

export default Animals