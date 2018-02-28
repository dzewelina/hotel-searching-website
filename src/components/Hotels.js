import React, { Component } from 'react';
import hotels from '../data/hotels.json';

class Hotels extends Component {
  state = {
    hotels
  }

  render() {
    const { hotels } = this.state;
    return (
      <div>
        {hotels.map((hotel, i) => (
          <div key={i} className='hotel'>
            <h1>{hotel.Name}</h1>
            <p>
              {hotel.Facilities.map((facility, i) => (<span key={i}>{facility} </span>))}
            </p>
            <img src={hotel.Image} alt={`${hotel.Name}`} />
          </div>
        ))}
      </div>
    );
  }
}

export default Hotels;
