import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer';

import React from 'react';
import Checkboxes from '../components/Checkboxes';

describe('Checkboxes component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Checkboxes handleChange={jest.fn()}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});