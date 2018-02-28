import React, { Component } from 'react';
import hotels from '../data/hotels.json';
import Hotel from './Hotel';
import Checkboxes from './Checkboxes';
import _ from 'underscore';

class Hotels extends Component {
  state = {
    hotels,
    filters: []
  }

  render() {
    const { hotels, facilities, filters } = this.state;
    return (
      <div>
        <Checkboxes facilities={facilities} handleChange={this.handleChange}/>
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
