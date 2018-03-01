import React, { Component } from 'react';
import hotels from '../data/hotels.json';
import Hotel from './Hotel';
import Checkboxes from './Checkboxes';
import _ from 'underscore';

class Hotels extends Component {
  state = {
    hotels,
    filters: [],
    sort: 0
  };

  render() {
    const { hotels, filters, sort } = this.state;
    return (
      <div>
        <Checkboxes handleChange={this.updateFilters} />
        <div className='form-group'>
          <label>Sort by: <b>Star Rating</b></label>
          <select className='form-control col-md-1' onChange={this.updateSort}>
            <option value='0'>Choose...</option>
            <option value='-1'>High to Low</option>
            <option value='1'>Low to High</option>
          </select>
        </div>
        <ul className='list-unstyled'>
          {hotels
            .filter(hotel => !_.difference(filters, hotel.Facilities).length)
            .sort((hotelA, hotelB) => sort * (hotelA.StarRating - hotelB.StarRating))
            .map((hotel, i) => (
              <Hotel key={i} hotel={hotel} />
            ))}
        </ul>
      </div>
    );
  }

  updateSort = (e) => {
    this.setState({ sort: +e.target.value });
  }

  updateFilters = (e) => {
    const checked = e.target.value;
    let { filters } = this.state;

    if (filters.includes(checked)) filters = _.reject(filters, (filter) => filter === checked);
    else filters.push(checked);

    this.setState({ filters });
  }
}

export default Hotels;
