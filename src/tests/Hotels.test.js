import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react';
import Hotels from '../components/Hotels';
import hotels from '../data/hotels.json';

describe('Hotels component', () => {
  it('renders all hotels', () => {
    const wrapper = shallow(<Hotels/>);
    const numberOfHotelsData = hotels.length;
    const numberOfHotels = wrapper.find('li.hotel').length;
    expect(numberOfHotelsData).toEqual(numberOfHotels);
  });
});