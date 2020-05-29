import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dashboard from './Dashboard';

describe('Dashboard component', () => {
  const props = {
    error: 'Invalid info',
  };
  it('renders Dashboard ', () => {
    const wrapper = shallow(<Dashboard />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders Dashboard with error', () => {
    const wrapper = shallow(<Dashboard {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
