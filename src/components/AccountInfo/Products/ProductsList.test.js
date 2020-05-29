import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProductsList from './ProductsList';

describe('ProductsList component', () => {
  const props = {
    error: 'Invalid info',
  };
  it('renders ProductsList ', () => {
    const wrapper = shallow(<ProductsList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders ProductsList with error', () => {
    const wrapper = shallow(<ProductsList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
