import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddInvoice from './AddInvoice';

describe('AddInvoice component', () => {
  const props = {
    error: 'Invalid info',
  };
  it('renders AddInvoice ', () => {
    const wrapper = shallow(<AddInvoice />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders AddInvoice with error', () => {
    const wrapper = shallow(<AddInvoice {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
