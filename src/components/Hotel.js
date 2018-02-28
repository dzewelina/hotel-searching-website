import React from 'react';
import PropTypes from 'prop-types';

const Hotel = ({ hotel }) => (
  <li className='hotel media'>
    <img className='align-self-start mr-3' src={hotel.Image} alt={`${hotel.Name}`} />
    <div className='media-body'>
      <h1 className='mt-0'>{hotel.Name}</h1>
      <span>{hotel.StarRating}<i className="fas fa-star"></i></span>
      <p>
        {hotel.Facilities.map((facility, i) => (<span key={i}>{facility} </span>))}
      </p>
    </div>
  </li>
);

Hotel.propTypes = {
  hotel: PropTypes.object.isRequired
};

export default Hotel;