import React, { Component } from 'react';
import hotels from '../data/hotels.json';

class Hotels extends Component {
  state = {
    hotels
  }

  render() {
    const { hotels } = this.state;
    return (
      <ul className='list-unstyled'>
        {hotels.map((hotel, i) => (
          <li key={i} className='hotel media'>
            <img className='align-self-start mr-3' src={hotel.Image} alt={`${hotel.Name}`} />
            <div className='media-body'>
              <h1 className='mt-0'>{hotel.Name}</h1>
              <p>
                {hotel.Facilities.map((facility, i) => (<span key={i}>{facility} </span>))}
              </p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Hotels;
