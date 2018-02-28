import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer';

import React from 'react';
import Hotel from '../components/Hotel';

describe('Hotel component', () => {
  const testingHotel = {
    'Name': 'Testing Hotel',
    'StarRating': 3,
    'Facilities': ['car park', 'restaurant', 'bar'],
    'Image': 'https://images'
  };
  it('matches the snapshot', () => {
    const tree = renderer.create(<Hotel hotel={testingHotel}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});