import React, { Component } from 'react';
import hotels from '../data/hotels.json';
import Hotel from './Hotel';

class Hotels extends Component {
  state = {
    hotels
  }

  render() {
    const { hotels } = this.state;
    return (
      <ul className='list-unstyled'>
        {hotels.map((hotel, i) => (
          <Hotel key={i} hotel={hotel}/>
        ))}
      </ul>
    );
  }
}

export default Hotels;
