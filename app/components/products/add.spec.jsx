import React from 'react';
import { mount } from 'enzyme';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

import ProductsAdd from './add';
import * as productsActions from './actions';

const store = createStore(combineReducers({ form: formReducer }), applyMiddleware(thunk));

let wrapper;
let Form;
let input;

beforeAll(() => {
  wrapper = mount(
    <Provider store={store}><ProductsAdd /></Provider>);
  Form = wrapper.find('ProductAddForm');
  input = Form.find('input#product-title');
});

describe('Product add form', () => {
  it('Renders products add form elements', () => {
    expect(wrapper).toMatchSnapshot();
    expect(typeof Form.prop('handleSubmit')).toEqual('function');
    expect(typeof input).toEqual('object');
    expect(typeof Form.find('button')).toEqual('object');
  });

  it('Simulates text entry', () => {
    jest.spyOn(productsActions, 'addProduct').mockImplementation(() => jest.fn());
    input.simulate('change', { target: { value: 'asd' } });
    Form.simulate('submit');
    expect(productsActions.addProduct.mock.calls.length).toEqual(1);
    expect(typeof productsActions.addProduct.mock.calls[0][0]).toBe('object');
    expect(productsActions.addProduct.mock.calls[0][0].title).toBe('asd');
    productsActions.addProduct.mockRestore();
  });

  
});
