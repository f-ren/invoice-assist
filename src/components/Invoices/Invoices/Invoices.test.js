import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Invoices from './Invoices';

describe('Invoices component', () => {
  const props = {
    error: 'Invalid info',
  };
  it('renders Invoices ', () => {
    const wrapper = shallow(<Invoices />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders Invoices with error', () => {
    const wrapper = shallow(<Invoices {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
