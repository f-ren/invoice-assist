import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignUp from './SignUp';

describe('SignUp component', () => {
  const props = {
    error: 'Invalid info',
  };
  it('renders SignUp ', () => {
    const wrapper = shallow(<SignUp />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders SignUp with error', () => {
    const wrapper = shallow(<SignUp {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
