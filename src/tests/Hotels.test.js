import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer';

import React from 'react';
import Hotels from '../components/Hotels';
import hotels from '../data/hotels.json';

describe('Hotels component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Hotels />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders all hotels', () => {
    const wrapper = shallow(<Hotels />);
    const numberOfHotelsData = hotels.length;
    const numberOfHotels = wrapper.find('Hotel').length;
    expect(numberOfHotels).toEqual(numberOfHotelsData);
  });
  it('updates state when checkbox clicked', () => {
    const wrapper = mount(<Hotels />);
    wrapper.find('input[value="car park"]').simulate('change', { target: { value: 'car park' } });
    expect(wrapper.state().filters).toEqual(['car park']);

    wrapper.find('input[value="pool"]').simulate('change', { target: { value: 'pool' } });
    expect(wrapper.state().filters).toEqual(['car park', 'pool']);

    wrapper.find('input[value="car park"]').simulate('change', { target: { value: 'car park' } });
    expect(wrapper.state().filters).toEqual(['pool']);
  });
  it('filters hotels by facilities', () => {
    const testingHotels = [
      {
        'Name': 'Testing Hotel',
        'StarRating': 3,
        'Facilities': ['car park', 'restaurant', 'bar'],
        'Image': 'https://image'
      },
      {
        'Name': 'Testing Hotel2',
        'StarRating': 5,
        'Facilities': ['car park', 'pool', 'gym'],
        'Image': 'https://image2'
      }
    ];
    const wrapper = shallow(<Hotels />);
    wrapper.setState({ hotels: testingHotels, filters: ['gym'] });
    const numberOfHotels = wrapper.find('Hotel').length;
    expect(numberOfHotels).toEqual(1);

    wrapper.setState({ filters: ['gym', 'bar'] });
    const numberOfHotels2 = wrapper.find('Hotel').length;
    expect(numberOfHotels2).toEqual(0);
  });
  it('updates state when sort option chosen', () => {
    const wrapper = mount(<Hotels />);
    wrapper.find('select').simulate('change', { target: { value: '-1' } });
    expect(wrapper.state().sort).toEqual(-1);

    wrapper.find('select').simulate('change', { target: { value: '1' } });
    expect(wrapper.state().sort).toEqual(1);
  });
});