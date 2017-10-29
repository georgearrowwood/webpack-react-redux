import React from 'react';
import { mount } from 'enzyme';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// import productsStore from './store';
import * as productsActions from './actions';
import ProductsList from './list';
import reducers from './reducers';

const mockProductsList = [
  { id: 1, title: 'test product 1' },
  { id: 2, title: 'test product 2' },
];

describe('ProductsList Container', () => {
  it('Renders component and triggers action fetchList on did mount', () => {
    const store = createStore(combineReducers({ products: reducers }), applyMiddleware(thunk));
    jest.spyOn(productsActions, 'fetchProducts').mockImplementation(() => jest.fn());
    const wrapper = mount(<Provider store={store}><ProductsList /></Provider>);
    expect(wrapper).toMatchSnapshot();
    const component = wrapper.find('ProductsList');
    expect(Array.isArray(component.prop('products'))).toEqual(true);
    expect(component.prop('products').length).toEqual(0);
    expect(productsActions.fetchProducts.mock.calls.length).toEqual(1);
    productsActions.fetchProducts.mockRestore();
  });

  it('set init state with products data', () => {
    const store = createStore(
      combineReducers({ products: reducers }),
      { products: { items: mockProductsList } },
      applyMiddleware(thunk),
    );
    const wrapper = mount(<Provider store={store}><ProductsList /></Provider>);
    expect(wrapper).toMatchSnapshot();
    const component = wrapper.find('ProductsList');
    expect(Array.isArray(component.prop('products'))).toEqual(true);
    expect(component.prop('products').length).toEqual(2);
  });
});
