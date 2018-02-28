import React, { Component } from 'react';
import hotels from '../data/hotels.json';
import Hotel from './Hotel';

class Hotels extends Component {
  state = {
    hotels,
    facilities: ['car park', 'restaurant', 'bar', 'gym', 'pool']
  }

  render() {
    const { hotels, facilities } = this.state;
    return (
      <div>
        <h2>Filters</h2>
        {facilities.map((facility, i) => (
          <div key={i} className='form-check'>
            <input className='form-check-input' type='checkbox' />
            <label className='form-check-label'>
              {facility}
            </label>
          </div>
        ))}
        <ul className='list-unstyled'>
          {hotels.map((hotel, i) => (
            <Hotel key={i} hotel={hotel} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Hotels;
