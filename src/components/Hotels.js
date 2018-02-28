import React, { Component } from 'react';
import hotels from '../data/hotels.json';
import Hotel from './Hotel';
import _ from 'underscore';

class Hotels extends Component {
  state = {
    hotels,
    facilities: ['car park', 'restaurant', 'bar', 'gym', 'pool'],
    filters: []
  }

  render() {
    const { hotels, facilities, filters } = this.state;
    return (
      <div>
        <h2>Filters</h2>
        {facilities.map((facility, i) => (
          <div key={i} className='form-check'>
            <input className='form-check-input' type='checkbox' value={facility} onChange={this.handleChange} />
            <label className='form-check-label'>
              {facility}
            </label>
          </div>
        ))}
        <ul className='list-unstyled'>
          {hotels
            .filter(hotel => !_.difference(filters, hotel.Facilities).length)
            .map((hotel, i) => (
              <Hotel key={i} hotel={hotel} />
            ))}
        </ul>
      </div>
    );
  }

  handleChange = (e) => {
    const checked = e.target.value;
    let { filters } = this.state;

    if (filters.includes(checked)) filters = _.reject(filters, (filter) => filter === checked);
    else filters.push(checked);

    this.setState({ filters });
  }
}

export default Hotels;
