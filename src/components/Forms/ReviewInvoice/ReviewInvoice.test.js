import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ReviewInvoice from './ReviewInvoice';

describe('ReviewInvoice component', () => {
  const props = {
    error: 'Invalid info',
  };
  it('renders ReviewInvoice ', () => {
    const wrapper = shallow(<ReviewInvoice />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders ReviewInvoice with error', () => {
    const wrapper = shallow(<ReviewInvoice {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
