import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Login from './Login';

describe('Login component', () => {
  const props = {
    error: 'Invalid info',
  };
  it('renders Login ', () => {
    const wrapper = shallow(<Login />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders Login with error', () => {
    const wrapper = shallow(<Login {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
