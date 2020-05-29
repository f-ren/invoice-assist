import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from './Home';

describe('Home component', () => {
  const props = {
    error: 'Invalid info',
  };
  it('renders Home ', () => {
    const wrapper = shallow(<Home />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders Home with error', () => {
    const wrapper = shallow(<Home {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
