import React from 'react';
import PropTypes from 'prop-types';

const Sorting = ({ updateSort }) => (
  <div className='form-group'>
    <label>Sort by: <b>Star Rating</b></label>
    <select className='form-control col-md-1' onChange={updateSort}>
      <option value='0'>Choose...</option>
      <option value='-1'>High to Low</option>
      <option value='1'>Low to High</option>
    </select>
  </div>
);

Sorting.propTypes = {
  updateSort: PropTypes.func.isRequired
};

export default Sorting;