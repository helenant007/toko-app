import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Showcase from './components/Showcase';

import 'antd/dist/antd.css';
import { styFlex } from './styles';

const View = () => (
  <div>
    <Header />
    <div className={styFlex}>
      <Showcase />
      <ProductList />
    </div>
  </div>
);
export default View;
