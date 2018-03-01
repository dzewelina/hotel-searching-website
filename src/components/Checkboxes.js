import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkboxes extends Component {
  state = {
    facilities: ['car park', 'restaurant', 'bar', 'gym', 'pool']
  };

  render() {
    const { facilities } = this.state;
    const { handleChange } = this.props;
    return (
      <div>
        <h2>Filters</h2>
        {facilities.map((facility, i) => (
          <div key={i} className='form-check'>
            <label className='form-check-label'>
              <input className='form-check-input' type='checkbox' value={facility} onChange={handleChange} />
              {facility}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

Checkboxes.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default Checkboxes;