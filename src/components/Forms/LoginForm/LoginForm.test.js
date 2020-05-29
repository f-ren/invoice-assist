import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoginForm from './LoginForm';

describe('LoginForm component', () => {
  const props = {
    error: 'Invalid info',
  };
  it('renders LoginForm ', () => {
    const wrapper = shallow(<LoginForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders LoginForm with error', () => {
    const wrapper = shallow(<LoginForm {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
