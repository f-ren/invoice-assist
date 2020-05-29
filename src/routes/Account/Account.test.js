import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Account from './Account';

describe('Account component', () => {
  const props = {
    error: 'Invalid info',
  };
  it('renders Account ', () => {
    const wrapper = shallow(<Account />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders Account with error', () => {
    const wrapper = shallow(<Account {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
