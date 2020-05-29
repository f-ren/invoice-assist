import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './Header';

describe('Header component', () => {
  const props = {
    error: 'Invalid info',
  };
  it('renders Header ', () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders Header with error', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
