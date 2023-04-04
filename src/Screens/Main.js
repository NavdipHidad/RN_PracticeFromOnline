import React, {Component, useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';

import AppStackNavigator from '../AppNavigatore';
import {addMyProduct} from '../NewRedux/MyProductSlice';

let productData = [
  {
    id: 0,
    name: 'XRay styling shoes',
    brand: 'PUMA',
    price: 2400,
    qty: 0,
  },
  {
    id: 1,
    name: 'Sports shoes',
    brand: 'Nike',
    price: 5000,
    qty: 0,
  },
  {
    id: 2,
    name: 'Sneakers for Men',
    brand: 'Red Tape',
    price: 1000,
    qty: 0,
  },
];

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    productData.map(item => {
      dispatch(addMyProduct(item));
    });
  }, []);
  return <AppStackNavigator />;
};

export default Main;
