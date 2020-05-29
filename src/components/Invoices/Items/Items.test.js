import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Items from './Items';

describe('Items component', () => {
  const props = {
    error: 'Invalid info',
  };
  it('renders Items ', () => {
    const wrapper = shallow(<Items />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders Items with error', () => {
    const wrapper = shallow(<Items {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
