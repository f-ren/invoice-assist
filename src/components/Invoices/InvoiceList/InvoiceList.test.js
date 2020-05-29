import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import InvoiceList from './InvoiceList';

describe('InvoiceList component', () => {
  const props = {
    error: 'Invalid info',
  };
  it('renders InvoiceList ', () => {
    const wrapper = shallow(<InvoiceList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders InvoiceList with error', () => {
    const wrapper = shallow(<InvoiceList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
