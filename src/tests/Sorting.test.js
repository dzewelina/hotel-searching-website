import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer';

import React from 'react';
import Sorting from '../components/Sorting';

describe('Sorting component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Sorting updateSort={jest.fn()}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});